const HeadlineCard = (props) => {
    return (
        <div className="card" style={{ width: '60%' }}>
            <img src={props.balloon.fields.thumbnail} alt="Image of man" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings</h5>

            </div>
        </div>
    )
}

export default HeadlineCard;
