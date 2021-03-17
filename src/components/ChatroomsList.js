import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import { ActionCable } from 'react-actioncable-provider';
import Chatroom from './Chatroom'

function ChatroomsList() {

    let [chatrooms, setChatrooms] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/chatrooms`)
            .then(res => res.json())
            .then(arrOfChats => {
                console.log(arrOfChats)
                setChatrooms(arrOfChats)
            })
    }, [])

    let listOfChatrooms = chatrooms.map(chatroom => {
        return <Chatroom key={chatroom.id} chatroom={chatroom}/>
    })

    return(
        <div>
            <ul>
                {/* {listOfChatrooms} */}
            </ul>
        </div>
    )
}

// let mapStateToProps = (state) => {

// }

// let mapDispatchToProps = (dispatch) => {

// }


export default ChatroomsList;