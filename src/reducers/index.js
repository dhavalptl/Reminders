import {combineReducers} from 'redux';
import reminderReducer from './reminderReducer';
const reducers = combineReducers({
    reminders: reminderReducer
});

export default reducers;