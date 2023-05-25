import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component tests', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('renders Footer without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a div with the class App-footer', () => {
        const appFooter = wrapper.find('.App-footer');
        expect(appFooter).toHaveLength(1);
    });

    it('renders contain the text "Copyright"', () => {
        const copyright = wrapper.find('p');
        expect(copyright.text()).toContain('Copyright');
    });
});
