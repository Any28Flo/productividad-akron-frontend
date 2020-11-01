import { combineReducers } from 'redux';
import userReducer from './userDuck';
import taskReducer from './taskDuck';
const rootReducer = combineReducers({
    user: userReducer,
    task: taskReducer
})
export default rootReducer;