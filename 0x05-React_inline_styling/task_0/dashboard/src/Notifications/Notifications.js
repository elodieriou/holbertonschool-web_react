import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <React.Fragment>
                <div className={"menuItem"}>
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className={'Notifications'}>
                        <button
                            style={{
                                position: "absolute",
                                right: "1rem",
                                top: "3.5rem",
                                fontSize: "1rem",
                                border: "none",
                                background: "none",
                                cursor: "pointer"
                            }}
                            aria-label={"Close"}
                            onClick={ () => {
                                console.log("Close button has been clicked\n");
                            }}
                        >x</button>
                        {listNotifications.length === 0 ? <p>No new notification for now</p> : <p>Here is the list of notifications</p>}
                        <ul>
                            {listNotifications.map((notification) => (
                                <NotificationItem
                                    id={notification.id}
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                    markAsRead={this.markAsRead}
                                />
                            ))}
                        </ul>
                    </div>
                )}
            </React.Fragment>
        );
    };
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;
