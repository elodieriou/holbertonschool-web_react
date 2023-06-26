import {
    markAsARead,
    setNotificationFilter,
    setLoadingState,
    setNotifications,
    fetchNotifications
} from './notificationActionCreators';
import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS,
    NotificationTypeFilters
} from './notificationActionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Notification actions creators tests', () => {

    afterEach(() => {
        fetchMock.restore();
    });

    it('test action created on mark as a read', () => {
        const actionMarkAsARead =  {
            type: MARK_AS_READ,
            index: 1
        };
        expect(markAsARead(1)).toEqual(actionMarkAsARead);
    });

    it('test action created on set notification filter default', () => {
        const actionSetFilterDefault = {
            type: SET_TYPE_FILTER,
            filter: 'DEFAULT'
        };
        expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(actionSetFilterDefault);
    });

    it('test action created on set notification filter urgent', () => {
        const actionSetFilterUrgent = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT'
        };
        expect(setNotificationFilter(NotificationTypeFilters.URGENT)).toEqual(actionSetFilterUrgent);
    });

    it('test action created on set loading state to true', () => {
        const actionSetLoadingState = {
            type: SET_LOADING_STATE,
            loading: true
        };
        expect(setLoadingState(true)).toEqual(actionSetLoadingState);
    });

    it('test action created on set notifications', () => {
        const actionSetNotifications = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: {}
        };
        expect(setNotifications({})).toEqual(actionSetNotifications);
    });

    it('test action created on fetch all notifications', () => {
        const store = mockStore({});
        fetchMock.get('http://localhost:8564/notifications.json', {
            status: 200,
            body: {}
        });

        return store
            .dispatch(fetchNotifications())
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(setLoadingState(true));
                expect(actions[1]).toEqual(setNotifications({}));
                expect(actions[2]).toEqual(setLoadingState(false));
            });
    });
});
