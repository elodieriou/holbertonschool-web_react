import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const NotificationsItem = ({type, html, value}) => {
    const liProps = {
        'data-notification-type': type,
    };
    if (html) liProps.dangerouslySetInnerHTML = html;
    return (
        <li {...liProps}>{value}</li>
    );
};

NotificationsItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string,
    value: PropTypes.string,
};

NotificationsItem.defaultProps = {
    type: 'default',
};

export default NotificationsItem;
