import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import {displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout} from '../actions/uiActionCreators';
import {logOut} from "./AppContext";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listNotifications: [
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
                {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
            ],
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'h') {
            event.preventDefault();
            alert('Logging you out');
            this.props.logout();
        }
    }

    markNotificationAsRead = (id) => {
        this.setState({
            listNotifications: this.state.listNotifications.filter((notification) => {
                return notification.id !== id;
            }),
        });
    }
    render() {
        const listCourses = [
            {id: 1, name: "ES6", credit: 60},
            {id: 2, name: "Webpack", credit: 20},
            {id: 3, name: "React", credit: 40},
        ];
        const { listNotifications } = this.state;
        const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login } = this.props;
        return (
            <React.Fragment>
                <Notifications listNotifications={listNotifications}
                               displayDrawer={displayDrawer}
                               handleDisplayDrawer={displayNotificationDrawer}
                               handleHideDrawer={hideNotificationDrawer}
                               markNotificationAsRead={this.markNotificationAsRead}
                />
                <Header />
                <div className={css(styles.body)}>
                    {
                        isLoggedIn &&
                        <BodySectionWithMarginBottom title={"Course list"}>
                            <CourseList listCourses={listCourses}/>
                        </BodySectionWithMarginBottom>
                    }
                    {
                        !isLoggedIn &&
                        <BodySectionWithMarginBottom title={"Log in to continue"}>
                            <Login logIn={login}/>
                        </BodySectionWithMarginBottom>
                    }
                    <BodySection title={"News from the School"}>
                        <p>Hello World!</p>
                    </BodySection>
                </div>
                <div className={css(styles.footer)}>
                    <Footer />
                </div>
            </React.Fragment>
        );
    };
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func,
    login: PropTypes.func,
    logout: PropTypes.func
};

App.defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
    login: () => {},
    logout: () => {}
};

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderTop: '3px solid #e1484c',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        borderTop: '3px solid #e1484c',
        width: '100%',
        textAlign: 'center',
        fontStyle: 'italic',
        padding: '1rem 0'
    },
});

export const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.get('isUserLoggedIn'),
        displayDrawer: state.get('isNotificationDrawerVisible')
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
        hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
        login: (email, password) => dispatch(loginRequest(email, password)),
        logout: () => dispatch(logout())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

export { App };