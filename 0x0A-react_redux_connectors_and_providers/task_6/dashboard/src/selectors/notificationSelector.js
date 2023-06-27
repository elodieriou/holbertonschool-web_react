import {Map} from 'immutable';

export const filterTypeSelected = (state) => {
    return state.filter;
};

export const getNotifications = (state) => {
    const notifications = state.notifications;
    return Map(notifications);
};

export function getUnreadNotifications(state) {
    const notifications = Map(state.notifications.get('messages'));
    if (notifications) {
        return notifications.valueSeq().filter((notification) => notification.isRead === false);
    }
    return notifications;
}
