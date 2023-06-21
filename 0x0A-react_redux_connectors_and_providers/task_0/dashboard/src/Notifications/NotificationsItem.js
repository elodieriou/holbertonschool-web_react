import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";


class NotificationsItem extends React.PureComponent {
    render() {
        const { type, html, value, markAsRead, id } = this.props;
        const styleItem = type === 'default' ? styles.defaultNotification : styles.urgentNotification;
        const liProps = {
            className: css(styleItem, styles.itemsMobile),
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

const styles = StyleSheet.create({
    defaultNotification: {
        color: 'darkblue',
    },
    urgentNotification: {
        color: 'red',
    },
    itemsMobile: {
        '@media (max-width: 900px)': {
            listStyleType: 'none',
            padding: '1rem 0',
            borderBottom: '1px solid grey',
        }
    }
});

export default NotificationsItem;
