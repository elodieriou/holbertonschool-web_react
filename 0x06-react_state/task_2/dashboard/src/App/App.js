import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import {getLatestNotification} from '../utils/utils';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { user, logOut, AppContext} from './AppContext';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayDrawer: false, user, logOut: this.logOut };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
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

    handleDisplayDrawer = () => {
        this.setState({ displayDrawer: true });
    }

    handleHideDrawer = () => {
        this.setState({ displayDrawer: false })
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
    render() {
        const listCourses = [
            {id: 1, name: "ES6", credit: 60},
            {id: 2, name: "Webpack", credit: 20},
            {id: 3, name: "React", credit: 40},
        ]

        const listNotifications = [
            {id: 1, type: "default", value: "New course available"},
            {id: 2, type: "urgent", value: "New resume available"},
            {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
        ]
        return (
            <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
                <Notifications listNotifications={listNotifications}
                               displayDrawer={this.state.displayDrawer}
                               handleDisplayDrawer={this.handleDisplayDrawer}
                               handleHideDrawer={this.handleHideDrawer} />
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
                <Footer />
            </AppContext.Provider>
        );
    };
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderTop: '3px solid #e1484c',
    },
});

export default App;
