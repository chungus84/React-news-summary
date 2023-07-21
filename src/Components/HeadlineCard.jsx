const HeadlineCard = (props) => {

    const { newsData } = props;
    const thumbnail = newsData.thumbnail;
    const headline = newsData.headline;
    return (
        <div className="card" style={{ width: '60%' }}>
            <img src={thumbnail} alt="Image of man" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{headline}</h5>

            </div>
        </div>
    )
}

export default HeadlineCard;
