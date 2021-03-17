import { SET_MESSAGES, ADD_MESSAGE } from '../components/Chatroom';

let messageReducer = (state={}, action) => {
    switch (action.type) {

        case "ADD_MESSAGE": 
            return [
                ...state,
                action.message
            ]
        case "SET_MESSAGES": 
            return action.messages
        default:
            return state
    }
}

export default messageReducer;