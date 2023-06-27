import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
    FETCH_NOTIFICATIONS_SUCCESS
} from './notificationActionTypes';


export const markAsARead = (index) => {
    return {
        type: MARK_AS_READ,
        index
    };
};

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter
    };
};

export const setLoadingState = (loading) => {
    return {
        type: SET_LOADING_STATE,
        loading
    };
};

export const setNotifications = (data) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data
    };
};

export const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));

        return fetch('http://localhost:8564/notifications.json')
            .then((response) => response.json())
            .then((response) => dispatch(setNotifications(response)))
            .catch((error) => console.log(error))
            .finally(() => dispatch(setLoadingState(false)));
    };
};
