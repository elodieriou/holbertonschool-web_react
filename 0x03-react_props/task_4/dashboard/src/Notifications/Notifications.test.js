import React from 'react';
import { shallow } from 'enzyme';
import Notifications from "./Notifications";

describe('Notifications component tests', () => {

    describe('When displayDrawer is true', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Notifications displayDrawer={true}/>);
        });

        it('renders Notifications component without crashing', () => {
            expect(wrapper.exists()).toBe(true);
        });

        it('renders contain div.Notifications', () => {
            const div = wrapper.find('div.Notifications');
            expect(div.hasClass('Notifications')).toBe(true);
        });

        it('renders not contain div.menuItem', () => {
            const div = wrapper.find('div.menuItem');
            expect(div.hasClass('menuItem')).toBe(true);
        });

        it('renders the text', () => {
            const textElement = wrapper.find('p');
            expect(textElement.at(1).text()).toBe('Here is the list of notifications');
        });

        it('renders NotificationsItem component', () => {
            const list = wrapper.find('ul');
            const listItems = list.find('NotificationsItem');
            expect(listItems).toHaveLength(3);
            expect(listItems.first().html()).toEqual('<li data-notification-type="default">New course available</li>')
        });
    });

    describe('When displayDrawer is false', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Notifications />);
        });

        it('renders not contain div.Notifications', () => {
            const div = wrapper.find('div.Notifications');
            expect(div.exists()).toBe(false);
        });

        it('renders contain div.menuItem', () => {
            const div = wrapper.find('div.menuItem');
            expect(div.hasClass('menuItem')).toBe(true);
        });
    });
});
