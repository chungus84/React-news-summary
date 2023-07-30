import axios from "axios";

import { getNews, formatResponse } from "../src/utils/newsDataService";

import mockNewsData from '../mockNewsData.json';
import mockNewsData2 from '../mockNewsData2.json'

vi.mock('axios');

describe('newsDataServices tests', () => {
    describe('getNews tests', () => {

        it('should should make the external data call', async () => {
            // Arrange
            axios.get.mockResolvedValueOnce({ data: mockNewsData });
            // Act
            await getNews();
            // Assert
            expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/response`);
        });


        it('should should return the right data after a successful request', async () => {
            // Arrange
            axios.get.mockResolvedValueOnce({ data: mockNewsData });
            // Act
            const result = await getNews();
            // Assert
            expect(result).toEqual(mockNewsData.response.results);

        });

        it('should be caught in the try catch of dataFormatter but still return data', async () => {
            // Arrange
            axios.get.mockResolvedValueOnce({ data: mockNewsData2 })
            // Act
            const result = await getNews()
            // Assert
            expect(result).toEqual(mockNewsData2.results);
        })

        it('should should return a length of 10 when given 10 articles', async () => {

            // Arrange
            axios.get.mockResolvedValueOnce({ data: mockNewsData });
            // Act
            const result = await getNews();
            // Assert
            expect(result.length).toEqual(mockNewsData.response.results.length)
        });

        it('should return an empty array on an unsuccessful response', async () => {
            // Arrange
            axios.get.mockRejectedValueOnce([]);
            // Act
            const result = await getNews();
            // Assert
            expect(result.length).toBe(0);
        });

        it('should should return an error when unsuccessful', async () => {
            // Arrange
            const error = { message: `Error` };
            axios.get.mockRejectedValueOnce(error);
            // Act
            const result = await getNews();
            // Assert
            expect(result).toBe(error);
        })
    });
    describe('formatResponse tests', () => {
        it('should return correctly formatted data via responseData.data.response.results', () => {
            // Arrange
            const mockData = {
                data: {
                    response: {
                        results: [
                            {},
                            {},
                            {}
                        ]
                    }
                }

            }

            // Act
            const result = formatResponse(mockData);
            // Assert
            expect(result).toEqual(mockData.data.response.results);
        })

        it('should be should be caught in the try catch and return data via responseData.data.results', () => {
            // Arrange
            const mockData = {
                data: {
                    results: [
                        {},
                        {},
                        {},
                    ]
                }
            }
            // Act
            const result = formatResponse(mockData);
            // Assert
            expect(result).toEqual(mockData.data.results)
        })
    })
})
