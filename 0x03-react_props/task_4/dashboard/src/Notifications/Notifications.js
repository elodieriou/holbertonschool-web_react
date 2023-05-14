import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils'
import NotificationsItem from './NotificationsItem';

const Notifications = ({displayDrawer}) => {
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
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationsItem type={"default"} value={"New course available"}/>
                        <NotificationsItem type={"urgent"} value={"New resume available"}/>
                        <NotificationsItem type={"urgent"} html={{__html: getLatestNotification()}}/>
                    </ul>
                </div>
            )}
        </React.Fragment>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    displayDrawer: false,
};

export default Notifications;
