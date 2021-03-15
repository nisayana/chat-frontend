import React from 'react'
import {connect} from 'react-redux'
import {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import { useHistory } from 'react-router-dom'

function LoginForm(props) {
// console.log()
let [username, setUsername] = useState("")
let [password, setPassword] = useState("")
let [errorMessage, setErrorMessage] = useState("")

// let history = useHistory()

let handleSubmit = (evt) => {
  evt.preventDefault()
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-type": "Application/JSON"
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(res => res.json())
    .then(resp => {
      console.log(resp)
      if(resp.error){
        setErrorMessage()
      } else {
        setUserInfo(resp)
        localStorage.token = resp.token
        // history.push("/chats")
      }
    })
}


  return(
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='white' textAlign='center' background-color='40adce'>
         Login to your account
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={e => {setUsername(e.target.value)}} value={username} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={e => {setPassword(e.target.value)}}
            value={password}
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  )
}

let setUserInfo = (userInfo) => {
  return {
      type: "SET_USER_INFO",
      payload: userInfo
  }
}

let mapDispatch = {
  setUserInfo: setUserInfo
}

export default connect(null, mapDispatch)(LoginForm)