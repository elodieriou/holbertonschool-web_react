import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import NotificationsItem from './NotificationsItem';
import {fetchNotifications, markAsARead} from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

class Notifications extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotifications();
    }

    render() {
        const { displayDrawer,
            listNotifications,
            handleDisplayDrawer,
            handleHideDrawer,
            markNotificationAsRead } = this.props;

        return (
            <React.Fragment>
                <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
                    <p className={css(styles.animationOpacity, styles.animationBounce)}>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className={css(styles.notifications, styles.notificationsMobile)}>
                        <button
                            className={css(styles.buttonMobile)}
                            style={{position: "absolute", right: "1rem", top: "1rem", fontSize: "1rem", border: "none", background: "none", cursor: "pointer"}}
                            aria-label={"Close"}
                            onClick={handleHideDrawer}
                        >x</button>
                        {listNotifications.length === 0 ? <p>No new notification for now</p> : <p>Here is the list of notifications</p>}
                        <ul className={css(styles.ulMobile)}>
                            {listNotifications.valueSeq().map((notification) => {
                                return <NotificationsItem
                                    id={notification.get('id') || notification.get('guid')}
                                    key={notification.get('id') || notification.get('guid')}
                                    type={notification.get('type')}
                                    value={notification.get('value')}
                                    html={notification.get('html')}
                                    markAsRead={markNotificationAsRead}
                                />
                            })}
                        </ul>
                    </div>
                )}
            </React.Fragment>
        );
    };
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
    fetchNotifications: PropTypes.func
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: {},
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
    fetchNotifications: () => {}
};

const opacity = {
    from: {
        opacity: '.5',
    },
    to: {
        opacity: '1',
    },
};

const bounce = {
    '70%': {
        transform: 'translateY(0px)',
    },
    '85%': {
        transform: 'translateY(-5px)',
    },
    '100%': {
        transform: 'translateY(5px)',
    }
};

const styles = StyleSheet.create({
    notifications: {
        border: '2px dotted #e1484c',
        padding: '1rem .5rem 0 .5rem',
        position: 'fixed',
        right: '0',
        top: '0',
        backgroundColor: 'rgba(255, 248, 248, 1)',
    },
    menuItem: {
        textAlign: 'right',
        ':hover': {
            cursor: 'pointer'
        }
    },
    notificationsMobile: {
        '@media (max-width: 900px)': {
            fontSize: '20px',
            position: 'fixed',
            top: '0',
            bottom: '0',
            left:'0',
            right: '0',
            zIndex: '9999',
            backgroundColor: 'rgba(255, 255, 255, 1)',
        },
    },
    buttonMobile: {
        '@media (max-width: 900px)': {
            top: '1rem',
        },
    },
    ulMobile: {
        '@media (max-width: 900px)': {
            padding: '0 !important',
        },
    },
    animationOpacity: {
        ':hover': {
            animationName: opacity,
            animationDuration: '1s',
            animationIterationCount: '3',
        },
    },
    animationBounce: {
        ':hover': {
            animationName: bounce,
            animationDuration: '0.5s',
            animationIterationCount: '3',
        },
    },
});

export const mapStateToProps = (state) => {
    return {
        listNotifications: getUnreadNotifications(state)
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotifications: () => dispatch(fetchNotifications()),
        markNotificationAsRead: (index) => dispatch(markAsARead(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

export { Notifications };
