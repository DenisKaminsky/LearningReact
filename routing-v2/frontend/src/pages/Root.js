import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet /*, useNavigation*/ } from 'react-router-dom';

function Root() {
    //const navigation = useNavigation();

    return (
        <React.Fragment>
            <MainNavigation/>
            <main>
                {/*navigation.state === 'loading' && <p>Loading...</p>*/}
                <Outlet/>
            </main>
        </React.Fragment>
    )
}

export default Root;