import { combineReducers } from 'redux'
import userReducer from './all_reducers/user_reducer'
import messageReducer from './all_reducers/message_reducer'


let joinedReducers = {
    userReducer: userReducer,
    messageReducer: messageReducer
}
  
let rootReducer = combineReducers(joinedReducers)
  
export default rootReducer;

