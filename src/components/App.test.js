/*import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Test for <App /> component', () => {
    const initialState = [];
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const setup = () => {
        const wrapper = shallow(<Provider store={store}><App /></Provider>);
        return {wrapper};
    }
   it('should render correctly', () => {
       const {wrapper} = setup();
        expect(wrapper.length).toBe(1);
    });
});*/