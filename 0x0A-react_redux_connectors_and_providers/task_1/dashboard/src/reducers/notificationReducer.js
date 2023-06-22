import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    FETCH_NOTIFICATIONS_SUCCESS,
    NotificationTypeFilters
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map, merge, setIn, set } from 'immutable';

const initialState = {
    filter: NotificationTypeFilters.DEFAULT,
    notifications: []
};

export const notificationReducer = (state = Map(initialState), action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);
            Object.keys(normalizedData).map((key) => {
                normalizedData[key].isRead = false;
            });
            return merge(state, { notifications: normalizedData });
        case MARK_AS_READ:
            return setIn(state, ['notifications', String(action.index), 'isRead'], true);
        case SET_TYPE_FILTER:
            return set(state, 'filter', action.filter);
        default:
            return state;
    }
};
