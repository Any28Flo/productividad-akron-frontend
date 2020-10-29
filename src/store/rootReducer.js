import {combineReducers} from 'redux';
import userReducer from './userDuck';
const rootReducer = combineReducers({
    user: userReducer
})
export default rootReducer;