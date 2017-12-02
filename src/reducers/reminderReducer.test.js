import reminderReducer from './reminderReducer';
import {ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER} from '../constants';

describe('reminder reducers', () => {
    it('should return initial state', () => {
        expect(reminderReducer(undefined, {})).toEqual([]);
    });

    it('should add reminder', () => {
        expect(reminderReducer([], {
            type: ADD_REMINDER,
            payload: {
                reminderText: 'Buy Paneer',
                reminderDate: '2017-12-02'
            }
        }).length === 1);
    });

    it('should add one more reminder', () => {
        expect(reminderReducer([{
            id: 123,
            reminderText: 'Buy Paneer',
            reminderDate: '2017-12-02'
        }], {
            type: ADD_REMINDER,
            payload: {
                reminderText: 'Buy Bread',
                reminderDate: '2017-12-03'
            }
        }).length === 2);
    });

    it('should delete reminder', () => {
        expect(reminderReducer([{
            id: 123,
            reminderText: 'Buy Paneer',
            reminderDate: '2017-12-02'
        },{
            id: 124,
            reminderText: 'Buy Bread',
            reminderDate: '2017-12-02'
        }], {
            type: DELETE_REMINDER,
            payload: 123
        }).length === 1);
    });

    it('should clear all reminders', () => {
        expect(reminderReducer([{
            id: 123,
            reminderText: 'Buy Paneer',
            reminderDate: '2017-12-02'
        },{
            id: 124,
            reminderText: 'Buy Bread',
            reminderDate: '2017-12-02'
        }], {
            type: CLEAR_REMINDERS
        }).length === 0);
    });
});