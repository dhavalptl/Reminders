import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './header';

describe('Test for <Header /> component', () => {
    let wrapper;
    const props = {
        handleClearReminders: jest.fn()
    };
   it('should render correctly', () => {
        wrapper = shallow(<Header/>);
        expect(wrapper.length).toBe(1);
    });
    it('should have title', () => {
        wrapper = shallow(<Header/>);
        expect(wrapper.find('.title').text()).toBe('Reminders');
    });
    it('should have clear reminders', () => {
        wrapper = shallow(<Header/>);
        expect(wrapper.find('.clearReminder').text()).toBe('Clear Reminders');
    });

    it('should click clear reminders', () => {
        wrapper = shallow(<Header {...props}/>);
        wrapper.find('button').simulate('click');
        //wrapper.find('button').prop('onClick')();
        expect(props.handleClearReminders.mock.calls.length).toBe(1);
    });
});