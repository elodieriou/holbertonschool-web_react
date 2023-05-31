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
            const div = wrapper.find('[className^="notifications"]');
            expect(div.hasClass('notifications_146ilsq-o_O-notificationsMobile_1qd7esh')).toBe(true);
        });

        it('renders not contain div.menuItem', () => {
            const div = wrapper.find('[className^="menuItem"]');
            expect(div.hasClass('menuItem_9n6xa')).toBe(true);
        });

        it('renders the text', () => {
            const textElement = wrapper.find('p');
            expect(textElement.at(1).text()).toBe('Here is the list of notifications');
        });

        it('renders NotificationItem component', () => {
            const list = wrapper.find('ul');
            const listItems = list.find('NotificationsItem');
            expect(listItems).toHaveLength(3);
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
            const div = wrapper.find('[className^="notifications"]');
            expect(div.exists()).toBe(false);
        });

        it('renders contain div.menuItem', () => {
            const div = wrapper.find('[className^="menuItem"]');
            expect(div.hasClass('menuItem_9n6xa')).toBe(true);
        });
    });

    describe('When props are updating', () => {
        it('doesnt rerender if there is the same listNotificationItem', () => {
            const listNotifications = [
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
                {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
            ];
            const render = jest.spyOn(Notifications.prototype, 'render');
            const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
            wrapper.setProps({ listNotifications: listNotifications });

            expect(render).toHaveBeenCalledTimes(1);
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

            const render = jest.spyOn(Notifications.prototype, 'render');
            const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications1}/>);
            wrapper.setProps({ listNotifications: listNotifications2 });

            expect(render).toHaveBeenCalledTimes(2);
            jest.restoreAllMocks();
        });
    });

    describe('When clicking on "Your notifications" and "Close button"', () => {
        it('clicking on "Your notifications", handleDisplayDrawer is called', () => {
            const handleDisplayDrawerSpy = jest.fn()
            const wrapper = shallow(<Notifications displayDrawer={true} handleDisplayDrawer={handleDisplayDrawerSpy}/>);
            wrapper.find('div.menuItem_9n6xa').simulate('click');
            expect(handleDisplayDrawerSpy).toHaveBeenCalled();
        });

        it('clicking on "Close button", handleHideDrawer is called', () => {
            const handleHideDrawerSpy = jest.fn()
            const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawerSpy}/>);
            wrapper.find('button').simulate('click');
            expect(handleHideDrawerSpy).toHaveBeenCalled();
        });
    });
});
