import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer
} from './uiActionCreators';
import {LOGIN} from "./uiActionTypes";

describe('ui actions creators tests', () => {
    it('test action created on login', () => {
        const email = '3685@holbertonstudents.com';
        const password = 'azerty';
        const actionLogin = {
            type: 'LOGIN',
            user: { email, password }
        };
        expect(login(email, password)).toEqual(actionLogin);
    });

    it('test action created on logout', () => {
        const actionLogout = { type: 'LOGOUT' };
        expect(logout()).toEqual(actionLogout);
    });

    it('test action created on display notification drawer', () => {
        const actionDisplayNotification = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
        expect(displayNotificationDrawer()).toEqual(actionDisplayNotification);
    });

    it('test action created on hide notification drawer', () => {
        const actionHideNotification = { type: 'HIDE_NOTIFICATION_DRAWER' };
        expect(hideNotificationDrawer()).toEqual(actionHideNotification);
    });
});
