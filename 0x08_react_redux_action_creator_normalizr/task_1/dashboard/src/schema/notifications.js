import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
    return notificationsData
        .default
        .filter((user) => user.author.id === userId)
        .map(({ context }) => context);
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications',
    {
    author: user,
    context: message,
});

export const normalizedData = normalize(notificationsData.default, [notification]);
