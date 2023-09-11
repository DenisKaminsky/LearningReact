import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";

import styles from './Root.module.css';

function RootLayout() {
    return (
        <React.Fragment>
            <MainNavigation/>
            <main className={styles.content}>
                <Outlet/>
            </main>
        </React.Fragment>
    );
}

export default RootLayout;