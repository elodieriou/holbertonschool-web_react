import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { AppContext } from "../App/AppContext";


describe('Header component tests', () => {

    let wrapper;
    let defaultUser;
    let loggedUser;
    let logOut;

    afterEach(() => {
        logOut.mockClear();
    });

    describe('With default user', () => {
        beforeEach(() => {
            defaultUser = {
                email: '',
                password: '',
                isLoggedIn: false,
            };
            logOut = jest.fn();
            wrapper = mount(
                <AppContext.Provider value={{ user: defaultUser, logOut }}>
                    <Header />
                </AppContext.Provider>
            );
        });

        it('renders Header without crashing', () => {
            expect(wrapper.exists()).toEqual(true);
        });

        it('renders a div with the class App-header', () => {
            const appHeader = wrapper.find('[className^="header"]');
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

        it('the logoutSection is not created', () => {
            const logoutSection = wrapper.find('#logoutSection');
            expect(logoutSection).toHaveLength(0);
        })
    });

    describe('With logged user', () => {
        beforeEach(() => {
            loggedUser = {
                email: '3685@holbertonstudents.com',
                password: 'azerty',
                isLoggedIn: true,
            };
            logOut = jest.fn();
            wrapper = mount(
                <AppContext.Provider value={{ user: loggedUser, logOut }}>
                    <Header />
                </AppContext.Provider>
            );
        });

        it('the logoutSection is created', () => {
            const logoutSection = wrapper.find('#logoutSection');
            expect(logoutSection).toHaveLength(1);
        });

        it('the logOut is calling', () => {
            const logOutLink = wrapper.find('span');
            logOutLink.simulate('click');
            expect(logOut).toHaveBeenCalledTimes(1);
        });
    });
});
