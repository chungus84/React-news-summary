import PropTypes from 'prop-types';
import HeadlineCard from "./HeadlineCard";

const HeadlinePages = ({ newsData }) => {

    const results = newsData.map(newsItem => <HeadlineCard key={newsItem.id.replaceAll(`/`, `-`)} newsData={newsItem} />);

    return (
        <>
            <h1 className="py-2">Headlines</h1>
            <div className="row row-cols-sm-auto justify-content-around">
                {results}
            </div>
        </>
    );
};

HeadlinePages.defaultProps = {
    newsData: [],
}

HeadlinePages.propTypes = {
    newsData: PropTypes.arrayOf(
        PropTypes.object,
    ),
}

export default HeadlinePages;
