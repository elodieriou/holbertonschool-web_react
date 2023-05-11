import React from 'react';
import './Notifications.css';

const NotificationsItem = ({ type, html, value }) => {
    const liProps = {
        'data-notification-type': type,
    };
    if (html) liProps.dangerouslySetInnerHTML = html;
    return (
        <li {...liProps}>{value}</li>
    );
}

export default NotificationsItem;
