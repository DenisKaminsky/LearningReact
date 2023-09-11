import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const handleUserAdd = (userName, age) => {
    setUsers((prevState) => [...prevState, { userName: userName, age: age, id: Math.random().toString() }]);
  }

  return (
    <React.Fragment>
      <AddUser onUserAdded={handleUserAdd}/>

      <UserList data={users} />
    </React.Fragment>
  );
}

export default App;
