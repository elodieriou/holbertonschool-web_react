import { Map } from 'immutable';
import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => {
    return state.filter;
};

export const getNotifications = (state) => {
    const notifications = state.notifications;
    return Map(notifications);
};

const selectFilter = (state) => state.notifications.get('filter');
const selectMessage = (state) => state.notifications.get('messages');

export const getUnreadNotificationsByType = createSelector(
    selectFilter, selectMessage,
    (filter, listMessages) => {
        if (listMessages) {
            if(filter === 'DEFAULT') return listMessages.valueSeq().filter((message) => message.get('isRead') === false);
            else return listMessages.valueSeq().filter((message) => message.get('isRead') === false && message.get('type') === 'urgent');
        }
        return listMessages;
    }
);
