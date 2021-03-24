import Chatroom from './Chatroom'
import {Link, withRouter} from 'react-router-dom'

function ChatPreview(props) {
    // console.log(props.chatroom.messages.slice(-1)[0])

    let {chatroom} = props
    let message = chatroom.messages.map((message) => {
        return <Chatroom key={message.id} message={message} />
    })

    console.log(chatroom)
    
    let lastMsg = chatroom.messages.slice(-1)[0]

    let handleClick = () => {
        // console.log("hello")
    }
    // console.log(lastMsg)
    return(
        <div>
            <div id="chatbox">
                <ul id="chats">
                    <Link to={'/chat'}>
                        <li className="chat" onClick={handleClick} >
                            <strong>Sender name </strong>
                            <span>{lastMsg.content}</span>
                        </li>
                    </Link>
                </ul>
            </div>
            {message}
        </div>
    )
}

export default ChatPreview