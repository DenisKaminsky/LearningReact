import React from 'react';
import EventItem from '../components/EventItem';
import { json, useRouteLoaderData, redirect } from 'react-router-dom';

const eventDetailLoader = async ({ params }) => {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        throw json(
            { message: "Could not fetch event with id:" + id },
            { status: 500 }
        );
    } else {
        return response;
    }
}

const deleteEventAction = async ({ params }) => {
    const id = params.id;
    const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw json(
            { message: "Could not delete event with id:" + id },
            { status: 500 }
        );
    }

    return redirect("/events");
}

function EventDetailPage() {
    const data = useRouteLoaderData('event-detail')

    return <EventItem event={data.event} />;
}

export default EventDetailPage;
export { eventDetailLoader, deleteEventAction };