import React, {useState, useEffect} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Chatroom from './components/Chatroom'
import './App.css';
import {connect} from 'react-redux';

// 

function App() {

  let [token, setToken] = useState("")
  let [currentUser, setUser] = useState([])

  useEffect(() => {
    // console.log("hello")
    if(localStorage.token){
      fetch('https://localhost:3000/users/keep_logged_in', {
       method: 'GET',
       headers: {
         "Authorization": localStorage.token
       }
     })
     .then(res=>res.json())
     .then(resp => {
       console.log(resp)
     })
   }
  }, [])

  // console.log(currentUser)

  return (
    <div>
      <Switch>
        <Route path="/" component={Home}>
          
        </Route>
        <Route path="/chatrooms" component={Chatroom}/>
      </Switch>
    </div>
  );
}

export default App;
