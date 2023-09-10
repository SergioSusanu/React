import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState([])

  const fetchBtc = ()=>{
     fetch("https://randomuser.me/api/?results=1")
       .then((resp) => resp.json())
       .then((data) => setUser(data));
  }

  useEffect(()=>{
    fetchBtc()
  },[])
    if (!(user.results)) { return (
      <div>
        <h1>Data pending...</h1>
      </div>
    );}

      return (
        <div style={{ padding: "40px" }}>
          <h1>Customer data</h1>
          {console.log(user)}
          <h2>Name: {user.results[0].name.first}</h2>
          <img src={user.results[0].picture.large} alt="random user" />
        </div>
      );
}

export default App;
