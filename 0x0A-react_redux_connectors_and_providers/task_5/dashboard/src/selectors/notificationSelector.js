import {Map} from 'immutable';

export const filterTypeSelected = (state) => {
    return state.filter;
};

export const getNotifications = (state) => {
    const notifications = state.notifications;
    return Map(notifications);
};

export const getUnreadNotifications = (state) => {
    const notifications = state.get('notifications');
    const unreadNotifications = Object.values(notifications)
        .filter((notification) => notification.isRead === false);
    const mapEntries = unreadNotifications.map((notification) => [notification.id, notification]);
    return Map(mapEntries);
};
