import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
} from './notificationSelector';
import { notificationReducer } from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

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
        const selector = getNotifications(reducer);
        expect(selector.toJS()).toEqual(reducer.toJS().notifications);
    });

    it('check that getUnreadNotifications returns a list of all unread notifications', () => {
        const selector = getUnreadNotifications(reducer);
        expect(selector).toHaveLength(2);
    });
});
