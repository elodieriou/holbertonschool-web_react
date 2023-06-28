import { getLatestNotification } from '../utils/utils';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import { fromJS } from 'immutable';
import React from 'react';

describe('NotificationsContainer tests', () => {

    describe('when fetchNotifications is called when the component is mounted', () => {

        const listNotifications = [
            {guid: 1, type: "default", value: "New course available"},
            {guid: 2, type: "urgent", value: "New resume available"},
            {guid: 3, type: "urgent", html: {__html: getLatestNotification()}},
        ];

        it('verify that fetchNotifications was called once time', () => {
            const fetchNotifications = jest.fn();
            shallow(<NotificationsContainer displayDrawer={true} listNotifications={fromJS(listNotifications)} fetchNotifications={fetchNotifications}/>);
            expect(fetchNotifications).toHaveBeenCalledTimes(1);
            jest.restoreAllMocks();
        });
    });

    describe('When props are updating', () => {

        let fetchNotifications;

        beforeEach(() => {
            fetchNotifications = jest.fn();
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('doesnt rerender if there is the same listNotificationItem', () => {
            const listNotifications = fromJS([
                {guid: 1, type: "default", value: "New course available"},
                {guid: 2, type: "urgent", value: "New resume available"},
                {guid: 3, type: "urgent", html: {__html: getLatestNotification()}},
            ]);
            const render = jest.spyOn(NotificationsContainer.prototype, 'render');
            const wrapper = shallow(<NotificationsContainer displayDrawer={true} listNotifications={listNotifications} fetchNotifications={fetchNotifications}/>);
            wrapper.setProps({ listNotifications: listNotifications });

            expect(render).toHaveBeenCalledTimes(2);
            jest.restoreAllMocks();
        });

        it('does rerender if there is not the same listNotificationItem', () => {
            const listNotifications1 = fromJS([
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
            ]);
            const listNotifications2 = fromJS([
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
                {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
            ]);

            const render = jest.spyOn(NotificationsContainer.prototype, 'render');
            const wrapper = shallow(<NotificationsContainer displayDrawer={true} listNotifications={listNotifications1} fetchNotifications={fetchNotifications}/>);
            wrapper.setProps({ listNotifications: listNotifications2 });

            expect(render).toHaveBeenCalledTimes(2);
            jest.restoreAllMocks();
        });
    });
});
