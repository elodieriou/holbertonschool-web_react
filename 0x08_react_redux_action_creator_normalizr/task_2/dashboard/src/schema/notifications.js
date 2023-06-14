import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';
import notifications from "../Notifications/Notifications";

export const getAllNotificationsByUser = (userId) => {
    const notifications = normalizedData.entities.notifications;
    const messages = normalizedData.entities.messages;
    const allNotificationsByUser = [];

    for (const element in notifications) {
        if (notifications[element].author === userId) {
            allNotificationsByUser.push(messages[notifications[element].context]);
        }
    }
    return allNotificationsByUser;
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications',
    {
    author: user,
    context: message,
});

export const normalizedData = normalize(notificationsData.default, [notification]);
