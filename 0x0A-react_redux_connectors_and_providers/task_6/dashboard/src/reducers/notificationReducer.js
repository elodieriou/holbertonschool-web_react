import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS,
    NotificationTypeFilters
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map, setIn, set, mergeDeep } from 'immutable';

const initialState = {
    notifications: {},
    filter: NotificationTypeFilters.DEFAULT,
    loading: false
};

export const notificationReducer = (state = Map(initialState), action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);
            Object.keys(normalizedData.entities.notifications).forEach((key) => {
                normalizedData.entities.notifications[key].isRead = false;
            });
            return mergeDeep(state, normalizedData.entities);
        case MARK_AS_READ:
            return setIn(state, ['notifications', String(action.index), 'isRead'], true);
        case SET_TYPE_FILTER:
            return set(state, 'filter', action.filter);
        case SET_LOADING_STATE:
            return set(state, 'loading', action.loading);
        default:
            return state;
    }
};
