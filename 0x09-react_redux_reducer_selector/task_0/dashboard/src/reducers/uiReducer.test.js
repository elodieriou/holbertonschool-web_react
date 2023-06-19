import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes';

import { uiReducer } from './uiReducer';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('uiReducer tests', () => {

    const initialState = {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
    };

    it('check the state returned equals the initial state when no action is passed', () => {
        const action = {}
        expect(uiReducer(initialState, action)).toEqual(initialState);
    });

    it('check the state returned equals the initial state when the action SELECT_COURSE is passed', () => {
        const action = { type: SELECT_COURSE }
        expect(uiReducer(initialState, action)).toEqual(initialState);
    });

    it ('check the state returned when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
       const action = { type: DISPLAY_NOTIFICATION_DRAWER };
       const expectedState = {
           isNotificationDrawerVisible: true,
           isUserLoggedIn: false,
           user: {}
       }
       const reducer = uiReducer(initialState, action);
       expect(reducer.isNotificationDrawerVisible).toEqual(true);
       expect(reducer).toEqual(expectedState);
    });
});
