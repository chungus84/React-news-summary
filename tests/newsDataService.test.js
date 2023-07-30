import axios from "axios";

import { getNews, formatResponse } from "../src/utils/newsDataService";

import mockNewsData from '../mockNewsData.json';
import mockNewsData2 from '../mockNewsData2.json'

vi.mock('axios');

describe('newsDataServices tests', () => {
    describe('getNews tests', () => {

        it('should should make the external data call', async () => {
            axios.get.mockResolvedValueOnce({ data: mockNewsData });

            await getNews();

            expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/response`);
        });


        it('should should return the right data after a successful request', async () => {
            axios.get.mockResolvedValueOnce({ data: mockNewsData });

            const result = await getNews();

            expect(result).toEqual(mockNewsData.response.results);

        });

        it('should be caught in the try catch of dataFormatter but still return data', async () => {
            axios.get.mockResolvedValueOnce({ data: mockNewsData2 })

            const result = await getNews()

            expect(result).toEqual(mockNewsData2.results);
        })

        it('should should return a length of 10 when given 10 articles', async () => {
            axios.get.mockResolvedValueOnce({ data: mockNewsData });

            const result = await getNews();

            expect(result.length).toEqual(mockNewsData.response.results.length)
        });

        it('should return an empty array on an unsuccessful response', async () => {
            axios.get.mockRejectedValueOnce([]);

            const result = await getNews();

            expect(result.length).toBe(0);
        });

        it('should should return an error when unsuccessful', async () => {
            const error = { message: `Error` };
            axios.get.mockRejectedValueOnce(error);
            const result = await getNews();
            expect(result).toBe(error);
        })
    });
    describe('formatResponse tests', () => {
        it('should return correctly formatted data via responseData.data.response.results', () => {

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


            const result = formatResponse(mockData);

            console.log(result);


            expect(result).toEqual(mockData.data.response.results);
        })

        it('should be should be caught in the try catch and return data via responseData.data.results', () => {
            const mockData = {
                data: {
                    results: [
                        {},
                        {},
                        {},
                    ]
                }
            }

            const result = formatResponse(mockData);

            expect(result).toEqual(mockData.data.results)
        })
    })
})
