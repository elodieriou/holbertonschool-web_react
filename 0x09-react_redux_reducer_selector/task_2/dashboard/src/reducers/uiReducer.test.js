import {
    DISPLAY_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';

import { uiReducer } from './uiReducer';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('uiReducer tests', () => {

    it('check the state returned equals the initial state when no action is passed', () => {
        const action = {};
        const reducer = uiReducer(undefined, action)
        expect(reducer.get('isNotificationDrawerVisible')).toEqual(false);
        expect(reducer.get('isUserLoggedIn')).toEqual(false);
        expect(reducer.get('user')).toEqual({});
    });

    it('check the state returned equals the initial state when the action SELECT_COURSE is passed', () => {
        const action = { type: SELECT_COURSE };
        const reducer = uiReducer(undefined, action)
        expect(reducer.get('isNotificationDrawerVisible')).toEqual(false);
        expect(reducer.get('isUserLoggedIn')).toEqual(false);
        expect(reducer.get('user')).toEqual({});
    });

    it('check the state returned when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
       const action = { type: DISPLAY_NOTIFICATION_DRAWER };
       const reducer = uiReducer(undefined, action);
        expect(reducer.get('isNotificationDrawerVisible')).toEqual(true);
        expect(reducer.get('isUserLoggedIn')).toEqual(false);
        expect(reducer.get('user')).toEqual({});
    });
});
