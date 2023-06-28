import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Notifications } from './Notifications';
import { fetchNotifications, markAsARead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

class NotificationsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchNotifications();
    }

    render() {
        return (<Notifications {...this.props}/>);
    }
}

export const mapStateToProps = (state) => {
    return {
        listNotifications: getUnreadNotificationsByType(state)
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotifications: () => dispatch(fetchNotifications()),
        markNotificationAsRead: (index) => dispatch(markAsARead(index)),
        setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
    fetchNotifications: PropTypes.func,
    setNotificationFilter: PropTypes.func
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: {},
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
    fetchNotifications: () => {},
    setNotificationFilter: () => {}
};

export { NotificationsContainer };
