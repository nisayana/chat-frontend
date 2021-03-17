import { connect } from "react-redux"
import ChatForm from './ChatForm'

function Chatroom(props) {

    // console.log(props.chatroom)
    let {chatroom} = props
    console.log(chatroom)
    return(
       <div>
           <ul>
               {chatroom}
               {/* {chatroom.messages.map((message) => {
                   return <li key={message.id}>{message.content}</li>
               }) */}
            }
           </ul>
           <ChatForm />
       </div>
    )
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