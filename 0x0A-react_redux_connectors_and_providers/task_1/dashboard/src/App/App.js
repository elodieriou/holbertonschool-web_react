// React import
import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Files import
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { user, logOut, AppContext } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user,
            logOut: this.logOut,
            listNotifications: [
                {id: 1, type: "default", value: "New course available"},
                {id: 2, type: "urgent", value: "New resume available"},
                {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
            ],
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
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
            this.props.logOut();
        }
    }

    logIn = (email, password) => {
        this.setState({
            user: {
                email,
                password,
                isLoggedIn: true,
            }
        });
    }

    logOut = () => {
        this.setState({ user });
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
        const { user, logOut, listNotifications } = this.state;
        const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

        return (
            <AppContext.Provider value={{ user: user, logOut: logOut }}>
                <Notifications listNotifications={listNotifications}
                               displayDrawer={displayDrawer}
                               handleDisplayDrawer={displayNotificationDrawer}
                               handleHideDrawer={hideNotificationDrawer}
                               markNotificationAsRead={this.markNotificationAsRead}
                />
                <Header />
                <div className={css(styles.body)}>
                    {
                        this.state.user.isLoggedIn === true &&
                        <BodySectionWithMarginBottom title={"Course list"}>
                            <CourseList listCourses={listCourses}/>
                        </BodySectionWithMarginBottom>
                    }
                    {
                        this.state.user.isLoggedIn === false &&
                        <BodySectionWithMarginBottom title={"Log in to continue"}>
                            <Login logIn={this.logIn}/>
                        </BodySectionWithMarginBottom>
                    }
                    <BodySection title={"News from the School"}>
                        <p>Hello World!</p>
                    </BodySection>
                </div>
                <div className={css(styles.footer)}>
                    <Footer />
                </div>

            </AppContext.Provider>
        );
    };
}

App.propTypes = {
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func
};

App.defaultProps = {
    displayDrawer: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {}
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
        hideNotificationDrawer: () => dispatch(hideNotificationDrawer())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
