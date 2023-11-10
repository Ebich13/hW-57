import Toolbar from './componets/Toolbar/Toolbar';
import UserForm from './componets/UserForm/UserForm';
import Users from './componets/Users/Users';
import {useState} from 'react';
import {User} from '../types';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (<>
    <header>
      <Toolbar/>
    </header>
    <main className="container-fluid">
      <div className="row mt-2">
        <div className="col-6">
          <UserForm onSubmit={addUser} />
        </div>
        <div className="col-6">
          <Users users={users}/>
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
