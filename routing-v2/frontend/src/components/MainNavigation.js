import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const navLinkClassName = ({isActive}) => isActive ? classes.active : '';

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={navLinkClassName}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" className={navLinkClassName}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
