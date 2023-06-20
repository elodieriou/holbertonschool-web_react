import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { user, logOut, AppContext } from '../App/AppContext';

describe('Footer component tests', () => {

    afterEach(() => {

    });

    describe('when user is logged', () => {
        let wrapper;
        let loggedUser = {
            email: '3685@holbetonstudents.com',
            password: 'azerty',
            isLoggedIn: true,
        }
        let logOut;

        it('the link "Contact us" is displayed when user is logged in', () => {
            logOut = jest.fn();
            wrapper = mount(<AppContext.Provider value={{ user: loggedUser, logOut }}><Footer /></AppContext.Provider>);
            const link = wrapper.find('a')
            expect(link).toHaveLength(1);
            expect(link.text()).toContain('Contact us');
            logOut.mockClear();
        });
    });

    describe('when user is not logged', () => {
        let wrapper;
        let defaultUser = {
            email: '',
            password: '',
            isLoggedIn: false,
        }

        beforeEach(() => {
            wrapper = mount(<AppContext.Provider value={{ user: defaultUser, logOut }}><Footer /></AppContext.Provider>);
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
});
