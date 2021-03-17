let initialStateOfUserReducer = {
    username: "",
    token: "",
    chatroom: []
  }

let userReducer = (state = initialStateOfUserReducer, action) => {
    switch (action.type) {
  
      case "SET_USER_INFO":
        // console.log(action)
        return {
          ...state,
          chatroom: action.payload.user.chatroom,
          username: action.payload.user.username,
          token: action.payload.token
        }
      default:
        return state
    }
  }

  export default userReducer;