import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { ActionCable } from 'react-actioncable-provider';
// import Chatroom from './Chatroom'
import ChatPreview from './ChatPreview';

function ChatroomsList() {

    let [chatrooms, setChatrooms] = useState([])
    let [activeChatroom, setActiveChatroom] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/chatrooms`) 
            .then(res => res.json())
            .then(arrOfChats => {
                console.log(arrOfChats)
                setChatrooms(arrOfChats)
            })
    }, [])

    let arrayOfChatrooms = chatrooms.map(chatroom => {
        return <ChatPreview key={chatroom.id} chatroom={chatroom}/>
    })

    console.log(arrayOfChatrooms)

    return(
        <div>
            <ul>
                {arrayOfChatrooms}
            </ul>
        </div>
    )
}

let setSingleChatroom = (singleChatroom) => {
    return {
        type: "SET_SINGLE_CHATROOM",
        payload: singleChatroom
    }

}

let mapDispatch = {
    setSingleChatroom: setSingleChatroom
}


export default connect(null, mapDispatch)(withRouter(ChatroomsList))