import { connect } from "react-redux"
import ChatForm from './ChatForm'

function Chatroom(props) {

    console.log(props)
    let {message} = props

    return(
       <div>
           <ul className="text-messages">
               <li>{message.content}</li>
           </ul>
           {/* <ChatForm /> */}
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