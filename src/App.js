import React, {useState, useEffect} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import Chatroom from './components/Chatroom'
import './App.css';

// 

function App() {

  let [token, setToken] = useState("")
  let [user, setUser] = useState([])

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
     .then(this.helpHandleResponse)
    //  this.fetchChatrooms()
   }
  }, [])

  const helpHandleResponse = (resp)=>{
    localStorage.token=resp.token
    setToken(resp.token)
    setUser(resp)
    // this.setState({
    //   currentUser: resp,
    //   token: resp.token
    // })
  }

  return (
    <div>
      <Route path="/" component={Home}/>
      <Route path="/chatrooms" component={Chatroom}/>
    </div>
  );
}

export default App;
