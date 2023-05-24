import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import {getLatestNotification} from '../utils/utils';

describe('Notifications component tests', () => {

    describe('When displayDrawer is true and listNotifications not empty', () => {
        let wrapper;

        beforeEach(() => {
            const listNotifications = [
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
                {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
            ]
            wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
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
            expect(listItems.first().html()).toEqual('<li data-notification-type="default">New course available</li>');
        });

        it('displays a message to the console when markAsRead function is called', () => {
            console.log = jest.fn();
            const id = 1;
            wrapper.instance().markAsRead(id);

            expect(console.log).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);

            jest.restoreAllMocks();
        });
    });

    describe('When displayDrawer is true and listNotifications empty', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
        });

        it('renders Notifications component without crashing', () => {
           expect(wrapper.exists()).toBe(true);
        });

        it('renders empty notifications', () => {
            const listItem = wrapper.find('NotificationsItem');
            expect(listItem).toHaveLength(0);
        });

        it('renders text "No new notification for now"', () => {
            const textElement = wrapper.find('p');
            expect(textElement.at(1).text()).toBe('No new notification for now');
        });
    });

    describe('When displayDrawer is false', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<Notifications />);
        });

        it('renders Notifications component without crashing', () => {
            expect(wrapper.exists()).toBe(true);
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

    describe('When props are updating', () => {
        it('doesnt rerender if there is the same listNotificationItem', () => {
            const listNotifications = [
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
                {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
            ];
            const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
            const shouldUpdate = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
            wrapper.setProps({ listNotifications: listNotifications });

            expect(shouldUpdate).toHaveBeenCalled();
            expect(shouldUpdate).toHaveLastReturnedWith(false);
            jest.restoreAllMocks();
        });

        it('does rerender if there is not the same listNotificationItem', () => {
            const listNotifications1 = [
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
            ];
            const listNotifications2 = [
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
                {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
            ];
            const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications1}/>);
            const shouldUpdate = jest.spyOn(wrapper.instance(), 'shouldComponentUpdate');
            wrapper.setProps({ listNotifications: listNotifications2 });

            expect(shouldUpdate).toHaveBeenCalled();
            expect(shouldUpdate).toHaveLastReturnedWith(true);
            jest.restoreAllMocks();
        });
    });
});
