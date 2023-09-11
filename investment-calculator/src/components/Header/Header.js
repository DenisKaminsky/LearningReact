import styles from './Header.module.css';

function Header(props) {
    return (
        <header className={styles.header}>
            <img src={props.logo} alt={props.title} />
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;