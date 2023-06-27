import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
} from './notificationSelector';
import { notificationReducer } from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map, fromJS } from 'immutable';

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
        const initialState = {
            notifications: fromJS({})
        };

        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                {
                    "id": "5debd76480edafc8af244228",
                    "author": {
                        "id": "5debd764a7c57c7839d722e9",
                        "name": {
                            "first": "Poole",
                            "last": "Sanders"
                        },
                        "email": "poole.sanders@holberton.nz",
                        "picture": "http://placehold.it/32x32",
                        "age": 25
                    },
                    "context": {
                        "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
                        "isRead": true,
                        "type": "urgent",
                        "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    }
                },
                {
                    "id": "5debd764507712e7a1307303",
                    "author": {
                        "id": "5debd7648ba8641ce0a34ea4",
                        "name": {
                            "first": "Norton",
                            "last": "Grimes"
                        },
                        "email": "norton.grimes@holberton.nz",
                        "picture": "http://placehold.it/32x32",
                        "age": 37
                    },
                    "context": {
                        "guid": "cec84b7a-7be4-4af0-b833-f1485433f66e",
                        "isRead": false,
                        "type": "urgent",
                        "value": "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. "
                    }
                }
            ]
        };
        initialState.notifications = notificationReducer(undefined, action);
        const selector = getUnreadNotifications(initialState);
        expect(selector.count()).toBe(1);
        expect(selector.toJS()[0]['guid']).toBe('cec84b7a-7be4-4af0-b833-f1485433f66e');
    });
});
