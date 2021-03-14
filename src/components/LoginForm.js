// import React, { Component } from 'react'

// class LoginForm extends Component {

//     state = {
//         username: "",
//         password: ""
//     }

//     handleSubmit = (evt) => {
//         console.log("handleSubmit", this)
//         evt.preventDefault()
//             fetch("http://localhost:3000/login", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "Application/json"
//               },
//               body: JSON.stringify({
//                 username: userInfo.username,
//                 password: userInfo.password
//               })
//             })
//               .then(res => res.json())
//               .then(this.helpHandleResponse)
//               this.props.history.push("/")
//         }

//     handleChange = (evt) => {
//         let {name, value} = evt.target
//         this.setState({
//             [name]: value
//         })
//     } 

//     render() {
//         // console.log("Login", this)
//         // let {formName} = this.props
//         let {username, password} = this.state

//         return (
//             // <div className="loginForm">
//                 <form onSubmit={this.handleSubmit}>
//                     {/* <h1>{formName}</h1> */}
//                     <label htmlFor="username">Username:</label>
//                     <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
//                     <input type="submit" value="Submit" className="auth"/>
//                 </form>
//             // </div>
//         );
//     }
// }

// export default LoginForm;

import React from 'react'
import {connect} from 'react-redux'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function LoginForm() {

let [username, setUsername] = useState("")
let [passowrd, setPassword] = useState("")
let [errorMessage, setErrorMessage] = useState("")

const handleChange = (evt) => {
  // this.setState({
  //     [evt.target.name]: evt.target.value
  // })
} 


  return(
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='white' textAlign='center' background-color='40adce'>
         Login to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
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