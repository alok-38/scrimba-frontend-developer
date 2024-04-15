export default function Card(props) {
    const { img, rating, reviewCount, country, title, price } = props;

    return (
        <div className="card">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>Rating: {rating}</p>
            <p>Reviews: {reviewCount}</p>
            <p>Country: {country}</p>
            <p>Price: ${price}</p>
        </div>
    );
}
