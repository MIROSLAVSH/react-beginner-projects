import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Here is a list of users: https://reqres.in/api/users

function App() {
	const [users, setUsers] = React.useState([]);
	
	React.useEffect(() => {
		fetch('https://reqres.in/api/users')
		.then(res => res.json())
		.then(json => {
			setUsers(json.data);
		}).catch(err => {
			console.warn(err);
			alert('Error fetching users')
		})
	}, []);

  return (
    <div className="App">
      <Users items={users}/>
      {/* <Success /> */}
    </div>
  );
}

export default App;
