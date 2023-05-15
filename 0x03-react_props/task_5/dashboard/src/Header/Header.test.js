import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component tests', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('renders Header without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a div with the class App-header', () => {
        const appHeader = wrapper.find('.App-header');
        expect(appHeader).toHaveLength(1);
    });

    it('renders a tag img', () => {
        const appHeader = wrapper.find('img');
        expect(appHeader).toHaveLength(1);
    });

    it('renders a tag h1', () => {
        const appHeader = wrapper.find('h1');
        expect(appHeader).toHaveLength(1);
    });
});
