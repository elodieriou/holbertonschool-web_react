import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import {getLatestNotification} from '../utils/utils';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.listCourses = [
            {id: 1, name: "ES6", credit: 60},
            {id: 2, name: "Webpack", credit: 20},
            {id: 3, name: "React", credit: 40},
        ];
        this.listNotifications = [
            {id: 1, type: "default", value: "New course available"},
            {id: 2, type: "urgent", value: "New resume available"},
            {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
        ];
        this.isLoggedIn = props.isLoggedIn;
        this.logOut = props.logOut;
        this.handleKeyDown = this.handleKeyDown.bind(this);
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
            this.logOut();
        }
    }
    render() {
        return (
            <React.Fragment>
                <Notifications listNotifications={this.listNotifications}/>
                <div className={"App"}>
                    <Header />
                    <div className={"App-body"}>
                        {this.isLoggedIn ? <CourseList listCourses={this.listCourses}/> : <Login/>}
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
};

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
};

export default App;
