import { SET_SINGLE_CHATROOM } from '../components/ChatroomsList';

let singleChatroomReducer = (state={}, action) => {
    switch (action.type) {

        case "SET_SINLGE_CHATROOM": 
            return {
                ...state,
                singleChatroom: action.payload.singleChatroom
            }
        //     return action.singleChatroom
        default:
            return state
    }
}

export default messageReducer;