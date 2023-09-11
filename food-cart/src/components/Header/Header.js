import React from 'react';

import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.css';
import headerImage from '../../assets/header-image.jpg';

function Header(props) {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
        
            <div className={styles['main-image']}>                
                <img src={headerImage} alt={props.title}></img>
            </div>
        </React.Fragment>
    );
}

export default Header;