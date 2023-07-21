const HeadlineCard = (props) => {
    return (
        <div className="card" style={{ width: '60%' }}>
            <img src={props.balloon.fields.thumbnail} alt="Image of man" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.balloon.fields.headline}</h5>

            </div>
        </div>
    )
}

export default HeadlineCard;
