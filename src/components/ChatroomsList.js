import React, {useState, useEffect} from 'react';
import { ActionCable } from 'react-actioncable-provider';

function ChatroomsList() {

    let [chatrooms, setChatrooms] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/chatrooms`)
            .then(res => res.json())
            .then(arrOfChats => {
                // console.log(arrOfChats)
                setChatrooms(arrOfChats)
            })
    }, [])

    return(
        <div>
            <h1> hello </h1>
        </div>
    )
}

export default ChatroomsList;