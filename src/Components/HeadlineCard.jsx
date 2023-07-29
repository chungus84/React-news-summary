import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const HeadlineCard = ({ newsData: { id, webUrl, fields } }) => {

    const navigate = useNavigate();

    return (

        <div className="card my-2  col-md-6 col-sm-12" onClick={() => navigate(`/summary/${id.replaceAll('/', '-')}`)}>
            <img src={fields.thumbnail} alt={fields.headline} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{fields.headline}</h5>
            </div>
        </div >

    )
}

HeadlineCard.propTypes = {
    newsData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        webUrl: PropTypes.string.isRequired,
        fields: PropTypes.object.isRequired
    })
}

export default HeadlineCard;
