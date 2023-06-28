import {
    DISPLAY_NOTIFICATION_DRAWER, LOGIN, LOGOUT,
} from '../actions/uiActionTypes';
import { uiReducer } from './uiReducer';
import { SELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('uiReducer tests', () => {

    it('check the state returned equals the initial state when no action is passed', () => {
        const action = {};
        const reducer = uiReducer(undefined, action)
        expect(reducer.get('isNotificationDrawerVisible')).toEqual(false);
        expect(reducer.get('isUserLoggedIn')).toEqual(false);
        expect(reducer.get('user')).toEqual(null);
    });

    it('check the state returned equals the initial state when the action SELECT_COURSE is passed', () => {
        const action = { type: SELECT_COURSE };
        const reducer = uiReducer(undefined, action)
        expect(reducer.get('isNotificationDrawerVisible')).toEqual(false);
        expect(reducer.get('isUserLoggedIn')).toEqual(false);
        expect(reducer.get('user')).toEqual(null);
    });

    it('check the state returned when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
       const action = { type: DISPLAY_NOTIFICATION_DRAWER };
       const reducer = uiReducer(undefined, action);
        expect(reducer.get('isNotificationDrawerVisible')).toEqual(true);
        expect(reducer.get('isUserLoggedIn')).toEqual(false);
        expect(reducer.get('user')).toEqual(null);
    });

    it('check the state returned when the action LOGIN is passed', () => {
        const action = { type: LOGIN, user: { email: '3685@holbertonstudents.com', password: 'azerty'} };
        const reducer = uiReducer(undefined, action);
        expect(reducer.get('isNotificationDrawerVisible')).toEqual(false);
        expect(reducer.get('isUserLoggedIn')).toEqual(false);
        expect(reducer.get('user')).toEqual({ email: '3685@holbertonstudents.com', password: 'azerty'});
    });

    it('check the state returned when the action LOGOUT is passed', () => {
        const action = { type: LOGOUT };
        const initialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: { email: '3685@holbertonstudents.com', password: 'azerty'}
        };
        const reducer = uiReducer(Map(initialState), action);
        expect(reducer.get('isNotificationDrawerVisible')).toEqual(false);
        expect(reducer.get('isUserLoggedIn')).toEqual(false);
        expect(reducer.get('user')).toEqual(null);
    });
});
