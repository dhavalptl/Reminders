import {ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER} from '../constants';

export const addReminder = (reminder) => {
    return {
        type: ADD_REMINDER,
        payload: reminder
    }
}

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
}

export const deleteReminder = (id) => {
    return {
        type: DELETE_REMINDER,
        payload: id
    }
}