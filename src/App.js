import React, {useState, useEffect} from 'react';
import {Link, Switch, Route, useHistory} from 'react-router-dom';
import Home from './components/Home'
import ChatroomsList from './components/ChatroomsList'
import './App.css';
import {connect} from 'react-redux';
// import { useHistory } from 'react-router-dom'


// 

function App() {

  let [token, setToken] = useState("")
  let [currentUser, setUser] = useState([])

  // let history = useHistory()
  
  // console.log(useHistory())


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
        <Route path="/" exact component={Home} />
          
        {/* </Route> */}
        <Route path="/chats" component={ChatroomsList}/>
      </Switch>
    </div>
  );
}

export default App;
