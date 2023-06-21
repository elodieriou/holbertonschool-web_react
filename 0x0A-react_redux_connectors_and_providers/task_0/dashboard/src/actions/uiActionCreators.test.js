import {
    login,
    logout,
    loginSuccess,
    loginFailure,
    loginRequest,
    displayNotificationDrawer,
    hideNotificationDrawer,
} from './uiActionCreators';
import {
    LOGIN,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ui actions creators tests', () => {

    const email = '3685@holbertonstudents.com';
    const password = 'azerty';
    const url = 'http://localhost:8564/login-success.json';

    afterEach(() => {
        fetchMock.restore();
    });

    it('test action created on login', () => {
        const actionLogin = {
            type: LOGIN,
            user: { email, password }
        };
        expect(login(email, password)).toEqual(actionLogin);
    });

    it('test dispatch LOGIN and LOGIN_SUCCESS if API request succeeds', () => {
        const store = mockStore({});
        fetchMock.get(url, 200);

        return store
            .dispatch(loginRequest(email, password))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(login(email, password));
                expect(actions[1]).toEqual(loginSuccess());
            });
    });

    it('test dispatch LOGIN and LOGIN_FAILURE if API request not succeeds', () => {
        const store = mockStore({});
        fetchMock.get(url, 500);

        return store
            .dispatch(loginRequest(email, password))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(login(email, password));
                expect(actions[1]).toEqual(loginFailure());
            });
    });

    it('test action created on logout', () => {
        const actionLogout = { type: LOGOUT };
        expect(logout()).toEqual(actionLogout);
    });

    it('test action created on display notification drawer', () => {
        const actionDisplayNotification = { type: DISPLAY_NOTIFICATION_DRAWER };
        expect(displayNotificationDrawer()).toEqual(actionDisplayNotification);
    });

    it('test action created on hide notification drawer', () => {
        const actionHideNotification = { type: HIDE_NOTIFICATION_DRAWER };
        expect(hideNotificationDrawer()).toEqual(actionHideNotification);
    });
});
