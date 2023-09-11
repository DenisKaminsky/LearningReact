import { useRouteLoaderData, json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

const editEventAction = async ({request, params}) => {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        date: data.get('date'),
        image: data.get('image'),
        description: data.get('description')
    }
    const response = await fetch(`http://localhost:8080/events/${params.id}`, {
        method: 'PATCH',
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw json(
            {
                message: "Could not update event!"
            },
            {
                status: 500
            }
        );
    }

    return redirect('/events');
}

function EditEventPage() {
    const data = useRouteLoaderData('event-detail');
    
    return <EventForm event={data.event} method="patch" />
}

export default EditEventPage;
export { editEventAction };