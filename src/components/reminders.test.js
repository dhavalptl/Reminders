import React from 'react';
import { shallow } from 'enzyme';
import Reminders from './reminders';

describe('Test for <Reminders /> component', () => {
    const setup = () => {
        const props =  {
            reminders: [],
            handleDeleteReminder: jest.fn()
        };
        const wrapper = shallow(<Reminders {...props}/>);
        return {wrapper, props};
    }
   it('should render correctly', () => {
       const {wrapper} = setup();
        expect(wrapper.length).toBe(1);
    });
    it('should display no reminder if no reminder', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.notFoundText').text()).toBe('No Reminders !!!');
    });
    it('should have two <Reminder />', () => {
        let {wrapper, props} = setup();
        wrapper.setProps({reminders: [{
            id: 123,
            reminderText: 'Buy Paneer',
            reminderDate: '2017-12-02'
        },{
            id: 124,
            reminderText: 'Buy Bread',
            reminderDate: '2017-12-02'
        }]});
        expect(wrapper.find('Reminder').length).toBe(2);
    });

    it('should match reminder object', () => {
        const reminder = {
            id: 123,
            reminderText: 'Buy Paneer',
            reminderDate: '2017-12-02'
        };
        let {wrapper, props} = setup();
        wrapper.setProps({reminders: [{
            id: 123,
            reminderText: 'Buy Paneer',
            reminderDate: '2017-12-02'
        }]});
        expect(wrapper.find('Reminder').props().reminder).toEqual(reminder);
    });

    it('should click delete reminders', () => {
        const deleteReminderId = 123;
        const {wrapper, props} = setup();
        wrapper.instance().handleDeleteReminder(deleteReminderId);
        expect(props.handleDeleteReminder.mock.calls.length).toBe(1);
    });
});