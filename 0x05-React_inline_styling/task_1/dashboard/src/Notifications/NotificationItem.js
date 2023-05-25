import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";


class NotificationItem extends React.PureComponent {
    render() {
        const { type, html, value, markAsRead, id } = this.props;
        const styleItem = type === 'default' ? styles.defaultNotification : styles.urgentNotification;
        const liProps = {
            className: css(styleItem),
            'data-notification-type': type,
        };
        if (html) liProps.dangerouslySetInnerHTML = html;
        return (
            <li {...liProps} onClick={() => (markAsRead(id))}>{value}</li>
        );
    }
}

NotificationItem.propTypes = {
    id: PropTypes.number,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {},
};

const styles = StyleSheet.create({
    defaultNotification: {
        color: 'darkblue',
    },
    urgentNotification: {
        color: 'red',
    },
});

export default NotificationItem;
