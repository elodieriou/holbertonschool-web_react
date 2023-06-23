import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
} from './notificationSelector';
import { notificationReducer } from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map } from 'immutable';

describe('notificationSelectors tests', () => {

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

    it('check that filterTypeSelected returns filter of a state', () => {
        const expectedFilter = filterTypeSelected(reducer.toJS());
        expect(reducer.toJS().filter).toEqual(expectedFilter);
    });

    it('check that getNotifications returns a list of all notifications', () => {
        const selector = getNotifications(reducer.toJS());
        expect(selector.toJS()).toEqual(reducer.toJS().notifications);
    });

    it('check that getUnreadNotifications returns a list of all unread notifications', () => {
        const action = {
            type: MARK_AS_READ,
            index: 2
        };
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
        const normalizedData = notificationsNormalizer(initialState.notifications);
        const initialStateNormalized = {
            ...initialState,
            notifications: {
                ...normalizedData
            }
        };
        const reducer = notificationReducer(Map(initialStateNormalized), action);
        const selector = getUnreadNotifications(reducer);
        expect(selector.size).toBe(2);
        expect(selector.toJS()['1']['isRead']).toEqual(false);
        expect(selector.toJS()['3']['isRead']).toEqual(false);
    });
});
