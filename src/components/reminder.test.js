import React from 'react';
import { shallow } from 'enzyme';
import Reminder from './reminder';

describe('Test for <Reminder /> component', () => {
    const setup = () => {
        const props =  {
            reminder: {
            },
            key: '',
            handleDeleteReminder: jest.fn()
        };
        const wrapper = shallow(<Reminder {...props}/>);
        return {wrapper, props};
    }
   it('should render correctly', () => {
       const {wrapper} = setup();
        expect(wrapper.length).toBe(1);
    });
    it('should have main li tag', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.listItem').length).toBe(1);
    });
    it('should have a list item text which show reminder text', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.reminderText').length).toBe(1);
    });
    it('should have a reminder timing text', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.fromNowText').length).toBe(1);
    });
    it('should have a delete button', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.deleteBtn').length).toBe(1);
    });
    it('should have a correct reminder text', () => {
        const {wrapper} = setup();
        wrapper.setProps({reminder: {
            id: 123,
            reminderText: 'Buy Paneer',
            reminderDate: '2017-12-02'
        }});
        expect(wrapper.find('.reminderText').text()).toEqual('Buy Paneer');
    });
    it('should click delete reminder', () => {
        const deleteReminderId = 123;
        const {wrapper, props} = setup();
        wrapper.instance().onDeleteReminder();
        expect(props.handleDeleteReminder.mock.calls.length).toBe(1);
    });
});