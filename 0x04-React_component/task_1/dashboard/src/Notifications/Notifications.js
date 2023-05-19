import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils'
import NotificationsItem from './NotificationsItem';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({displayDrawer, listNotifications}) => {
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
                            <NotificationsItem
                                key={notification.id}
                                type={notification.type}
                                value={notification.value}
                                html={notification.html}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </React.Fragment>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;
