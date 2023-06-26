import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';


describe('Header component tests', () => {

    let wrapper;

    describe('With default user', () => {
        beforeEach(() => {
            wrapper = shallow(<Header />);
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
        });
    });
});
