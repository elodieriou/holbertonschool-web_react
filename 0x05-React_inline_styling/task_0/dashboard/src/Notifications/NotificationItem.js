import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class NotificationsItem extends React.PureComponent {
    render() {
        const { type, html, value, markAsRead, id } = this.props;
        const liProps = {
            'data-notification-type': type,
        };
        if (html) liProps.dangerouslySetInnerHTML = html;
        return (
            <li {...liProps} onClick={() => (markAsRead(id))}>{value}</li>
        );
    }
}

NotificationsItem.propTypes = {
    id: PropTypes.number,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
};

NotificationsItem.defaultProps = {
    type: 'default',
    markAsRead: () => {},
};

export default NotificationsItem;
