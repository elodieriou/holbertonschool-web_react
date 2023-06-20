import {Map} from 'immutable';

export const filterTypeSelected = (state) => {
    return state.filter;
};

export const getNotifications = (state) => {
    const notifications = state.get('notifications');
    return Map(notifications);
};

export const getUnreadNotifications = (state) => {
    const notifications = state.get('notifications');
    console.log(notifications);
    return Object.keys(notifications)
        .map((key) => notifications[key])
        .filter((notification) => notification.isRead === false);
};
