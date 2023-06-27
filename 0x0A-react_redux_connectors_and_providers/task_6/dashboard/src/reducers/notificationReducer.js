import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS,
    NotificationTypeFilters
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map, setIn, set, mergeDeep, fromJS } from 'immutable';

const initialState = {
    notifications: {},
    filter: NotificationTypeFilters.DEFAULT,
    loading: false
};

export const notificationReducer = (state = Map(initialState), action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const data = notificationsNormalizer(action.data);
            Object.keys(data.notifications).forEach((item) => {
                data.notifications[item].isRead = false;
            });
            return mergeDeep(state, Map(data));
        case MARK_AS_READ:
            return setIn(state, ['messages', String(action.index), 'isRead'], true);
        case SET_TYPE_FILTER:
            return set(state, 'filter', action.filter);
        case SET_LOADING_STATE:
            return set(state, 'loading', action.loading);
        default:
            return state;
    }
};
