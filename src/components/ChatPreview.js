import Chatroom from './Chatroom'
import {Link, withRouter} from 'react-router-dom'

function ChatPreview(props) {

    console.log(props)

    let arrOfMessages = props.chatroom.messages.map((singleArr) => {
        return <Chatroom key={singleArr.id} message={singleArr} />
    })
    console.log(arrOfMessages)
    // // let lastMsg = chatroom.messages[messages.length-1]

    let handleClick = () => {
        // console.log("hello")
    }

    return(
        <div>
            <div id="chatbox">
                <ul id="chats">
                    <Link to={'/chat'}>
                        <li className="chat" onClick={handleClick} >
                            <strong>Sender name </strong>
                            {arrOfMessages}
                            {/* <span>{arrOfMessages.content}</span> */}
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default ChatPreview