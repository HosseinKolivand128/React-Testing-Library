import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import FormatUserName from './util';
function App() {
  const [users, setUsers] = useState([]);

  let mounted = false;
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      if (!mounted) {
        setUsers(data);
        mounted = true;
      }
    }
    
    getUsers()

  },[])
  // console.log(users);
  return (
    <div className="App">
      hi
      <FormatUserName username={users} />
    </div>
  );
}

export default App;
