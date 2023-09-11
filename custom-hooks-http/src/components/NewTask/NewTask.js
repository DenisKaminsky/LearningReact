import useHttpRequest from '../../hooks/useHttpRequest';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const [isLoading, error, sendRequest] = useHttpRequest();

  const enterTaskHandler = async (taskText) => {
    sendRequest(
      {
        url: 'https://learnreacthooks-17e77-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        method: 'POST',
        body: { text: taskText },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      (data) => {
        const generatedId = data.name;
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
      }
    )
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
