import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import HomePage from './pages/HomePage';
import EventsRoot from './pages/EventsRoot';
import EventsPage, { eventsLoader } from './pages/EventsPage';
import EventDetailPage, { eventDetailLoader, deleteEventAction } from './pages/EventDetailPage';
import EditEventPage, { editEventAction } from './pages/EditEventPage';
import NewEventPage, { addNewEventAction } from './pages/NewEventPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: editEventAction
              }
            ]
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: addNewEventAction
          }
        ]
      }
    ]
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
