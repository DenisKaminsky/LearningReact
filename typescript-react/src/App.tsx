import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import './App.css';
import { useContext } from 'react';
import { AppContext } from './store/todos-context';

function App() {
  const context = useContext(AppContext);

  return (
    <div>
      <Todos items={context.items} onClick={context.remove}/>
      <NewTodo onSubmit={context.add}/>
    </div>
  );
}

export default App;
