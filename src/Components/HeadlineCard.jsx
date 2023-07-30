import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { defaultImage } from '../utils/defaultImage';


const HeadlineCard = ({ newsData: { id, fields } }) => {

    const navigate = useNavigate();
    const altText = fields.thumbnail ? fields.headline : `No thumbnail supplied`
    const thumbnailImage = fields.thumbnail ? fields.thumbnail : defaultImage;

    return (

        <div className="card col-lg-5 col-sm-12 col-xs-12 mb-3"
            onClick={() => navigate(`/summary/${id.replaceAll('/', '-')}`)}>
            <img src={thumbnailImage} alt={altText} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{fields.headline}</h5>
            </div>
        </div >

    )
}

HeadlineCard.propTypes = {
    newsData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        fields: PropTypes.object.isRequired
    })
}

export default HeadlineCard;
