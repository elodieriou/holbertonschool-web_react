import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils'

function Notifications() {
    return (
        <div className='Notifications'>
            <button
                style={{
                    position: "absolute",
                    right: "1rem",
                    top: ".5rem",
                    fontSize: "1rem",
                    border: "none",
                    background: "none",
                    cursor: "pointer"
                }}
                aria-label="Close"
                onClick={ () => {
                    console.log("Close button has been clicked\n");
                }}
            >x</button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notifications;
