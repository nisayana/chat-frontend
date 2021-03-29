import { connect } from "react-redux"
import ChatForm from './ChatForm'

function Chatroom(props) {

    console.log(props)
    let {message} = props

    console.log(message)

    return(
       <div>
           <ul className="text-messages">
               {/* <li>{content}</li> */}
           </ul>
           {/* <ChatForm /> */}
       </div>
    )
}
let mapStateToProps = (state, ownProps) => {
    let chatroom = state.singleChatroom
    console.log(ownProps)
}

let setMessages = (messages) => {
    return {
        type: "SET_MESSAGES",
        messages: messages
    }
}


let mapDispatch = {
    setMessages,
}

export default connect(null, mapDispatch)(Chatroom)