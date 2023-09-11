import { NavLink } from "react-router-dom";
import styles from './MainNavigation.module.css';

function MainNavigation() {
    const navLinkClassName = ({isActive}) => isActive ? styles.active : "";

    return <header className={styles.header}>
        <nav>
            <ul className={styles.list}>
                <li>
                    <NavLink 
                        to="/" 
                        className={navLinkClassName}
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={navLinkClassName}>
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;