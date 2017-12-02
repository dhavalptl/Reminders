import React from 'react';
import { shallow } from 'enzyme';
import AddReminder from './addReminder';

describe('Test for <AddReminder /> component', () => {
    const setup = () => {
        const props =  {
            handleAddReminder: jest.fn()
        };
        const wrapper = shallow(<AddReminder {...props}/>);
        return {wrapper, props};
    }
   it('should render correctly', () => {
       const {wrapper} = setup();
        expect(wrapper.length).toBe(1);
    });
    it('should have 2 inputs', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.form-control').length).toBe(2);
    });
    it('should have a add button', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.addIcon').length).toBe(1);
    });
    it('should not click add reminder if no reminder text', () => {
        const {wrapper, props} = setup();
        wrapper.find('button').simulate('click');
        expect(props.handleAddReminder.mock.calls.length).toBe(0);
    });
    it('should not click add reminder if no reminder text', () => {
        const {wrapper, props} = setup();
        wrapper.setState({reminderText: 'Buy Paneer'});
        wrapper.find('button').simulate('click');
        expect(props.handleAddReminder.mock.calls.length).toBe(1);
    });
});