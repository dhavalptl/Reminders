import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Test for <Header /> component', () => {
    const setup = () => {
        const props = {
            handleClearReminders: jest.fn()
        };
        const wrapper = shallow(<Header {...props}/>);
        return {wrapper, props};
    }
   it('should render correctly', () => {
       const {wrapper} = setup();
        expect(wrapper.length).toBe(1);
    });
    it('should have title', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.title').text()).toBe('Reminders');
    });
    it('should have clear reminders', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.clearReminder').text()).toBe('Clear Reminders');
    });

    it('should click clear reminders', () => {
        const {wrapper, props} = setup();
        wrapper.find('button').simulate('click');
        //wrapper.find('button').prop('onClick')();
        expect(props.handleClearReminders.mock.calls.length).toBe(1);
    });
});