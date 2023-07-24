import PropTypes from 'prop-types';
import HeadlineCard from "./HeadlineCard";

const HeadlinePages = ({ newsData }) => {

    // const call = (input) => {
    //     return new Promise((resolve, reject) => {
    //         return resolve({
    //             val: input,
    //         })
    //     })
    // }

    // call(newsData).then((res => console.log(res.val)));

    const results = newsData.map(newsItem => <HeadlineCard key={newsItem.id.replaceAll('/', '-')} newsData={newsItem.fields} />);

    return (
        <>
            <h1 className="py-2  ">Headlines</h1>
            <div className="row mb-2 pb-2" style={{ justifyContent: 'center' }}>
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
