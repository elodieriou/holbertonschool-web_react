import React from 'react';
import './Notifications.css';

const NotificationsItem = (props) => {
    const liProps = {
        'data-notification-type': props.type,
    };
    if (props.html) liProps.dangerouslySetInnerHTML = props.html;
    return (
        <li {...liProps}>{props.value}</li>
    );
}

export default NotificationsItem;
