import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component tests', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    it('renders Login without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders 2 input tags', () => {
        const appHeader = wrapper.find('input');
        expect(appHeader).toHaveLength(3);
    });

    it('renders 2 label tags', () => {
        const appHeader = wrapper.find('label');
        expect(appHeader).toHaveLength(2);
    });

    it('renders input button disabled by default', () => {
        const button = wrapper.find('form input[type=\'submit\']');
        expect(button.prop('disabled')).toEqual(true);
    });

    it('renders input button enabled when email and password are not empty', () => {
        const email = wrapper.find('#email');
        const password = wrapper.find('#password');

        email.simulate('change', { target: { name: email, value: '3685@holbertonstudents.com' } });
        let button = wrapper.find('form input[type=\'submit\']');
        expect(button.prop('disabled')).toEqual(true);

        password.simulate('change', { target: { name: password, value: 'azerty' } });
        button = wrapper.find('form input[type=\'submit\']');
        expect(button.prop('disabled')).toEqual(false);
    });
});
