import { combineReducers } from 'redux'
import userReducer from './all_reducers/user_reducer'


let joinedReducers = {
    userReducer: userReducer
}
  
let rootReducer = combineReducers(joinedReducers)
  
export default rootReducer;

