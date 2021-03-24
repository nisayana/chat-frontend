import React, {useState, useEffect} from 'react';
import { connect } from "react-redux"


function ChatForm() {

    let [messageForm, setMessageForm] = useState("")

    let handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("hello")
    }

    return(
        <div className="chatbox">
            <form className="send-msg" onSubmit={handleSubmit}>
                <label htmlFor="message_id">Message</label>
                <input type="text" 
                    id="message_id" 
                    value={messageForm} 
                    onChange={e => {setMessageForm(e.target.value)}}
                />
                <input type="submit" value="Send a message" />

            </form>
        </div>
    )
}

let addMessage = (message) => {
    return {
        type: "ADD_MESSAGE",
        message: message
    }
}

let mapDispatch = {
    addMessage
}

export default connect(null, mapDispatch)(ChatForm)