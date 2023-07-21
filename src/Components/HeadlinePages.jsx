import PropTypes from 'prop-types';
import HeadlineCard from "./HeadlineCard";
import newsData from '../../mockNewsData.json'

const HeadlinePages = () => {

    const results = newsData.mockApiResponse.response.results.map(newsItem => <HeadlineCard key={newsItem.id} balloon={newsItem} />);


    return (
        <>
            <h1 className="py-1">Headlines</h1>
            <div className="row" style={{ justifyContent: 'center' }}>
                {results}
            </div>

        </>

    )
}

// HeadlinePages.defaultProps = {
//     results: []
// }

// HeadlinePages.propTypes = {
//     results: PropTypes.arrayOf(
//         PropTypes.exact({
//             id: PropTypes.string,
//             fields: PropTypes.object,


//         })
//     )
// }

export default HeadlinePages;