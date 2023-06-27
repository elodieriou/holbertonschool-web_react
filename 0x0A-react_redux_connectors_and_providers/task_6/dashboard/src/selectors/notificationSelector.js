import {Map} from 'immutable';

export const filterTypeSelected = (state) => {
    return state.filter;
};

export const getNotifications = (state) => {
    const notifications = state.notifications;
    return Map(notifications);
};

export function getUnreadNotifications(state) {
    const notifications = state.notifications.get('messages');
    if (notifications) {
        return notifications.valueSeq().filter((notification) => !notification.get('isRead'));
    }
    return notifications;
}
