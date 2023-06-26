import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS,
    NotificationTypeFilters
} from '../actions/notificationActionTypes';
import {notificationsNormalizer } from '../schema/notifications';
import { notificationReducer } from './notificationReducer';
import { Map } from 'immutable';

describe('notificationReducer tests', () => {

    const initialState = {
        filter: "DEFAULT",
        loading: false,
        notifications: [
            {
                id: 1,
                isRead: false,
                type: "default",
                value: "New course available"
            },
            {
                id: 2,
                isRead: false,
                type: "urgent",
                value: "New resume available"
            },
            {
                id: 3,
                isRead: false,
                type: "urgent",
                value: "New data available"
            }
        ]
    };
    const normalizedData = notificationsNormalizer(initialState.notifications);
    const initialStateNormalized = {
        ...initialState,
        notifications: normalizedData.entities.notifications
    };

    it('check that default state returns the initial state', () => {
        const defaultState = {
            notifications: {},
            filter: NotificationTypeFilters.DEFAULT,
            loading: false
        };
        const action = {};
        const reducer = notificationReducer(undefined, action);
        expect(reducer).toEqual(Map(defaultState));
    });

    it('check that FETCH_NOTIFICATIONS_SUCCESS returns the filter and notifications from data passed', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                {
                    id: 1,
                    type: "default",
                    value: "New course available"
                },
                {
                    id: 2,
                    type: "urgent",
                    value: "New resume available"
                },
                {
                    id: 3,
                    type: "urgent",
                    value: "New data available"
                }
            ]
        };

        const expectedState = {
            filter: 'DEFAULT',
            loading: false,
            notifications: normalizedData.entities.notifications
        };
        const reducer = notificationReducer(undefined, action);
        expect(reducer.toJS()).toEqual(expectedState);
    });

    it('check that MARK_AS_READ returns the notifications with isRead item updated', () => {
        const action = {
            type: MARK_AS_READ,
            index: 2
        };
        const expectedState = {
            filter: 'DEFAULT',
            loading: false,
            notifications: normalizedData.entities.notifications
        };
        expectedState.notifications[2].isRead = true;

        const reducer = notificationReducer(Map(initialStateNormalized), action);
        expect(reducer.toJS()).toEqual(expectedState);
    });

    it('check that SET_TYPE_FILTER returns the filter item updated', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: "URGENT"
        };
        const expectedState = {
            filter: 'URGENT',
            loading: false,
            notifications: normalizedData.entities.notifications
        };

        const reducer = notificationReducer(Map(initialStateNormalized), action);
        expect(reducer.toJS()).toEqual(expectedState);
    });

    it('check that SET_LOADING_STATE returns the filter item updated', () => {
        const action = {
            type: SET_LOADING_STATE,
            loading: true
        };
        const expectedState = {
            filter: 'DEFAULT',
            loading: true,
            notifications: normalizedData.entities.notifications
        };

        const reducer = notificationReducer(Map(initialStateNormalized), action);
        expect(reducer.toJS()).toEqual(expectedState);
    });
});
