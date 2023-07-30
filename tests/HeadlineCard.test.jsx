import HeadlineCard from "../src/Components/HeadlineCard";
import axios from 'axios'
import mockThumbnail from '../mockNewsDataThumbnail.json';
import { render, screen } from '@testing-library/react'
import { defaultImage } from "../src/utils/defaultImage";
import { MemoryRouter } from "react-router-dom";
import HeadlinePages from "../src/Components/HeadlinePages";

vi.mock('axios')

describe('HeadlineCard Tests', () => {
    it('should display altText No thumbnail supplied if thumbnail is not present in fields', async () => {
        // Arrange
        const mockNews = mockThumbnail.response.results[0]
        render(<MemoryRouter><HeadlineCard key={mockNews.id} newsData={mockNews} /></MemoryRouter>);
        screen.debug()
        // Act
        const image = await screen.getByAltText('No thumbnail supplied')
        // Render
        expect(image).toBeInTheDocument();

    })
})
