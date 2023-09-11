import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const addNewEventAction = async ({request}) => {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        date: data.get('date'),
        image: data.get('image'),
        description: data.get('description')
    }
    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw json(
            {
                message: "Could not create event!"
            },
            {
                status: 500
            }
        );
    }

    return redirect('/events');
}

function NewEventPage() {
    return <EventForm method="post" />
}

export default NewEventPage;
export { addNewEventAction };