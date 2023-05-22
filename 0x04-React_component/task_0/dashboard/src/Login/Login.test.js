import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Header component tests', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    it('renders Login without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders 2 input tags', () => {
        const appHeader = wrapper.find('input');
        expect(appHeader).toHaveLength(2);
    });

    it('renders 2 label tags', () => {
        const appHeader = wrapper.find('label');
        expect(appHeader).toHaveLength(2);
    });
});
