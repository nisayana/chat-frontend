import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import { ActionCable } from 'react-actioncable-provider';
// import Chatroom from './Chatroom'
import ChatPreview from './ChatPreview';

function ChatroomsList() {

    let [chatrooms, setChatrooms] = useState([])
    let [activeChatroom, setActiveChatroom] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/users/2`) 
            .then(res => res.json())
            .then(arrOfChats => {
                console.log(arrOfChats)
                setChatrooms(arrOfChats)
            })
    }, [])

    console.log(chatrooms)

    let singleChatroom = chatrooms.map(chatroom => {
        return <ChatPreview key={chatroom.id} chatroom={chatroom}/>
    })

    // console.log(singleChatroom)

    return(
        <div>
            <ul>
                {singleChatroom}
            </ul>
        </div>
    )
}

// let mapStateToProps = (state) => {

// }

// let mapDispatchToProps = (dispatch) => {

// }


export default ChatroomsList;