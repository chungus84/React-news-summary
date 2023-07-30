import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { defaultImage } from '../utils/defaultImage';


const HeadlineCard = ({ newsData: { id, webUrl, fields } }) => {

    const navigate = useNavigate();
    // const defaultImage = 'https://i.guim.co.uk/img/media/c582662a4cab5dc3b3958769e77be7f3f15c008f/0_0_5289_3173/master/5289.jpg?width=620&dpr=2&s=none'

    return (

        <div className="card col-lg-5 col-sm-12 col-xs-12 mb-3" onClick={() => navigate(`/summary/${id.replaceAll('/', '-')}`)}>
            <img src={fields.thumbnail ? fields.thumbnail : defaultImage} alt={fields.headline} className="card-img-top" />
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
