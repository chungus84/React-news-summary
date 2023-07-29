import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const NewsSummary = ({ newsData }) => {

    const id = useParams()

    const article = newsData.find(newsItem => {
        return newsItem.id.replaceAll('/', '-') === id.id;
    })
    console.log(article);

    return (
        <>
            <article>
                <a href={article.webUrl}
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <h1>{article.fields.headline} Summery</h1>
                </a>
                <img src={article.fields.thumbnail} alt="" />
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
