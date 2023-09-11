import './Header.css';

function Header(props){
    return (
        <div className="concepts-header">
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Header;