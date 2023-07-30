import HeadlineCard from "../src/Components/HeadlineCard";
import mockThumbnail from '../mockNewsDataThumbnail.json';
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";


describe(`HeadlineCard Tests`, () => {
    it(`should display altText No thumbnail supplied if thumbnail is not present in fields`, async () => {
        // Arrange
        const mockNews = mockThumbnail.response.results[0]
        render(<MemoryRouter><HeadlineCard key={mockNews.id} newsData={mockNews} /></MemoryRouter>);
        screen.debug()
        // Act
        const altText = await screen.getByAltText(`No thumbnail supplied`)
        // Render
        expect(altText).toBeInTheDocument();

    })
    it(`should display headline in altText if Thumbnail is present`, async () => {
        // Arrange
        const mockNews = mockThumbnail.response.results[1];
        // Act
        render(<MemoryRouter><HeadlineCard key={mockNews.id} newsData={mockNews} /></MemoryRouter>);
        screen.debug()
        const altText = await screen.getByAltText(mockNews.fields.headline);
        // Assert
        expect(altText).toBeInTheDocument();

    })

})
