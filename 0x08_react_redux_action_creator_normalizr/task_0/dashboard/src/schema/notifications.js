import * as notificationsData from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    return notificationsData
        .default
        .filter((user) => user.author.id === userId)
        .map(({ context }) => context);
}

export default getAllNotificationsByUser;
