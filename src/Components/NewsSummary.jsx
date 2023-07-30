import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { defaultImage } from '../utils/defaultImage';
import './css/NewsSummary.css'

const NewsSummary = ({ newsData }) => {

    const id = useParams()
    const navigate = useNavigate();


    const article = newsData.find(newsItem => {
        return newsItem.id.replaceAll(`/`, `-`) === id.id;
    })

    const altText = article.fields.thumbnail ? article.fields.headline : `No thumbnail supplied`
    const thumbnailImage = article.fields.thumbnail ? article.fields.thumbnail : defaultImage;

    return (
        <>
            <article>
                <a href={article.webUrl}
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <h1>{article.fields.headline} Summery</h1>
                </a>
                <p className="text-muted">Click on headline for full article</p>
                <button className="btn btn-primary my-3" onClick={() => navigate(`/`)}>Back to Headlines</button>
                <img src={thumbnailImage} alt={altText} />
                <p>Article by: {article.fields.byline}</p>
                <p>{article.fields.bodyText}</p>
            </article>
        </>
    )
}

NewsSummary.propTypes = {
    newsData: PropTypes.arrayOf(
        PropTypes.object,
    )
}

export default NewsSummary;
