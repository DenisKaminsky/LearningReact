import React, { useState, useEffect } from 'react';
import useHttpRequest from './hooks/useHttpRequest';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, error, sendRequest] = useHttpRequest();

  useEffect(() => {
    sendRequest(
      {
        url: 'https://learnreacthooks-17e77-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
      },
      (data) => {
        const loadedTasks = [];

        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }

        setTasks(loadedTasks);
      }
    );
  }, [sendRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
