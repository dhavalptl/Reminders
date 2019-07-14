/*import {ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER} from '../constants';
import {addReminder, clearReminders, deleteReminder} from './reminderAction';

describe('addReminder', () => {
    it('should create an action to add reminder', () => {
        const reminder = {
            id: 123,
            reminderText: 'Buy Paneer',
            reminderDate: '2017-12-02'
        };
        const expectedAction = {
            type: ADD_REMINDER,
            payload: {
                id: 123,
                reminderText: 'Buy Paneer',
                reminderDate: '2017-12-02'
            }
        };
        expect(addReminder(reminder)).toEqual(expectedAction);
    });
});

describe('deleteReminder', () => {
    it('should create an action to delete reminder', () => {
        const id = 123;
        const expectedAction = {
            type: DELETE_REMINDER,
            payload: id
        };
        expect(deleteReminder(id)).toEqual(expectedAction);
    });
});

describe('clearReminders', () => {
    it('should create an action to clear all reminders', () => {
        const expectedAction = {
            type: CLEAR_REMINDERS
        };
        expect(clearReminders()).toEqual(expectedAction);
    });
});*/