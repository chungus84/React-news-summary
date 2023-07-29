import PropTypes from 'prop-types';

const HeadlineCard = ({ newsData: { thumbnail, headline } }) => {

    return (
        <div className="card my-2  col-md-6 col-sm-12" >
            <img src={thumbnail} alt={headline} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{headline}</h5>
            </div>
        </div >
    )
}

HeadlineCard.propTypes = {
    newsData: PropTypes.exact({
        thumbnail: PropTypes.string,
        headline: PropTypes.string.isRequired,
        byline: PropTypes.string.isRequired,
        bodyText: PropTypes.string.isRequired
    })
}

export default HeadlineCard;
