import './Card.css';

function Card(props) {
    return (
        <li className="card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    );
}

export default Card;