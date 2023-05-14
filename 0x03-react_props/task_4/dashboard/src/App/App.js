import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

const App = ({isLoggedIn}) => {
  return (
      <React.Fragment>
          <Notifications />
          <div className={"App"}>
              <Header />
              <div className={"App-body"}>
                  {isLoggedIn ? <CourseList /> : <Login/>}
              </div>
              <Footer />
          </div>
      </React.Fragment>
  );
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
    isLoggedIn: false,
};

export default App;
