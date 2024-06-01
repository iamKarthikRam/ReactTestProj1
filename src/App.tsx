import { useState } from 'react';
import UserForm from './UserForm.tsx';
import UserList from './UserList.tsx';

function App() {
  const [users, setUsers] = useState<any[]>([]);

  const onUserAdd = (user :any) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
