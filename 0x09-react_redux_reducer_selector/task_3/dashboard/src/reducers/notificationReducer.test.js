import { notificationReducer } from './notificationReducer';
import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    FETCH_NOTIFICATIONS_SUCCESS,
    NotificationTypeFilters
} from '../actions/notificationActionTypes';

describe('notificationReducer tests', () => {

    const initialState = {
        filter: "DEFAULT",
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

    it('check that default state returns the initial state', () => {
        const defaultState = {
            notifications: [],
            filter: NotificationTypeFilters.DEFAULT
        };
        const action = {};
        const reducer = notificationReducer(undefined, action);
        expect(reducer).toEqual(defaultState);
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
        const reducer = notificationReducer(undefined, action);
        expect(reducer).toEqual(initialState);
    });

    it('check that MARK_AS_READ returns the notifications with isRead item updated', () => {
        const action = {
            type: MARK_AS_READ,
            index: 2
        };
        const expectedState = {
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                },
                {
                    id: 2,
                    isRead: true,
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
        const reducer = notificationReducer(initialState, action);
        expect(reducer).toEqual(expectedState);
    });

    it('check that SET_TYPE_FILTER returns the filter item updated', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: "URGENT"
        };
        const expectedState = {
            filter: "URGENT",
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
        const reducer = notificationReducer(initialState, action);
        expect(reducer).toEqual(expectedState);
    });
});
