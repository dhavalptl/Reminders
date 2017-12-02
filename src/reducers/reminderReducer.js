import {ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER} from '../constants';

const reminderReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_REMINDER:
            return state.concat([Object.assign({}, action.payload, {id: new Date().getTime()})]);
        case CLEAR_REMINDERS:
            return state.splice();
        case DELETE_REMINDER:
            return state.filter((reminder) => reminder.id !== action.payload);
        default:
            return state;
    }
}

export default reminderReducer;