import React from 'react';
import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

function EventsRoot() {
    return (
        <React.Fragment>
            <EventsNavigation/>
            <main>
                <Outlet/>
            </main>
        </React.Fragment>
    )
}

export default EventsRoot;