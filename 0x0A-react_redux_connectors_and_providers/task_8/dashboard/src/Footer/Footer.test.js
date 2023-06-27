import React from 'react';
import { shallow, mount } from 'enzyme';
import { Footer } from './Footer';

describe('Footer component tests', () => {

    describe('when user is not logged', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Footer />);
        });

        it('renders Footer without crashing', () => {
            expect(wrapper.exists()).toBe(true);
        });

        it('the link "Contact us" is not displayed when user is logged out', () => {
            const copyright = wrapper.find('p');
            expect(copyright.text()).toContain('Copyright');
            expect(copyright.find('p')).toHaveLength(1);
        });
    });

    describe('when user is logged', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Footer user={{}}/>);
        });

        it('the link "Contact us" is displayed when user is logged out', () => {
            const copyright = wrapper.find('a');
            expect(copyright.text()).toEqual('Contact us');
            expect(copyright.find('a')).toHaveLength(1);
        });
    })
});
