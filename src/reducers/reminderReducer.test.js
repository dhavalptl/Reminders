import reminderReducer from './reminderReducer';
import {ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER} from '../constants';

describe('reminder reducers', () => {
    it('should return initial state', () => {
        expect(reminderReducer(undefined, {})).toEqual([]);
    });

    it('should add reminder', () => {
        expect(reminderReducer([], {
            type: ADD_REMINDER,
            payload: 'Buy Paneer'
        }).length === 1);
    });

    it('should add one more reminder', () => {
        expect(reminderReducer([{
            id: 123,
            text: 'Testing items'
        }], {
            type: ADD_REMINDER,
            payload: 'Buy Paneer'
        }).length === 2);
    });

    it('should delete reminder', () => {
        expect(reminderReducer([{
            id: 123,
            text: 'Testing items'
        },{
            id: 124,
            text: 'Testing items2'
        }], {
            type: DELETE_REMINDER,
            payload: 123
        }).length === 1);
    });

    it('should clear all reminders', () => {
        expect(reminderReducer([{
            id: 123,
            text: 'Testing items'
        },{
            id: 124,
            text: 'Testing items2'
        }], {
            type: CLEAR_REMINDERS
        }).length === 0);
    });
});