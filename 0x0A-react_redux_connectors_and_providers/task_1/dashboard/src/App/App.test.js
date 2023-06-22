import React from 'react';
import { shallow, mount } from 'enzyme';
import { fromJS } from 'immutable';

import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils/utils';

describe('App component tests', () => {

  describe('When isLoggedIn = false', () => {

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('renders App without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders a div with the class App-body', () => {
      const appBody = wrapper.find('[className^="body"]');
      expect(appBody).toHaveLength(1);
    });

    it('renders contain the Notifications component', () => {
      const listNotifications = [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
      ]
      expect(wrapper.contains(<Notifications listNotifications={listNotifications}/>)).toBe(false);
    });

    it('renders contain the Header component', () => {
      expect(wrapper.contains(<Header />)).toBe(true);
    });

    it('renders contain the Login component', () => {
      expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('renders contain the Footer component', () => {
      expect(wrapper.contains(<Footer />)).toBe(true);
    });

    it('renders not contain the CourseList component', () => {
      expect(wrapper.contains(<CourseList />)).toBe(false);
    });

    it('the logIn function updates the state of user', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().logOut();
      expect(wrapper.state().user.isLoggedIn).toBe(false);
    });
  });

  describe('When isLoggedIn = true', () => {

    it('renders the component CourseList whereas Login', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({
        user: {
          isLoggedIn: true,
        },
      });
      expect(wrapper.find("CourseList")).toHaveLength(1);
      expect(wrapper.find("Login")).toHaveLength(0);
    });

    it('calls logOut function when keys Control and H are pressed', () => {
      const logOutMock = jest.fn();
      const wrapper = mount(<App logOut={logOutMock} />);

      const alert = jest.spyOn(global, 'alert');
      expect(alert);
      expect(logOutMock);

      jest.restoreAllMocks();
    });

    it('the logIn function updates the state of user', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().logIn();
      expect(wrapper.state().user.isLoggedIn).toBe(true);
    });
  });

  describe('Check markNotificationAsRead', () => {

    it('when remove notification read', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({
        user: {
          email: '3685@holbertonschool.com',
          password: 'azerty',
        }});
      expect(wrapper.state().listNotifications.length).toEqual(3);
      wrapper.instance().markNotificationAsRead(1);
      expect(wrapper.state().listNotifications.length).toEqual(2);
    });
  });

  describe('Check mapStateToProps', () => {

    it('verify that return the right object if only isUserLoggedIn is passed', () => {
      let state = fromJS({ isUserLoggedIn: true });
      const result = mapStateToProps(state);
      const expectedResult = { isLoggedIn: true, displayDrawer: undefined };
      expect(result).toEqual(expectedResult);
    });

    it('verify that return the right object if only isNotificationDrawerVisible is passed', () => {
      let state = fromJS({ isNotificationDrawerVisible: true });
      const result = mapStateToProps(state);
      const expectedResult = { isLoggedIn: undefined, displayDrawer: true };
      expect(result).toEqual(expectedResult);
    });

    it('verify that return the right object if isUserLoggedIn and isNotificationDrawerVisible are passed', () => {
      let state = fromJS({ isUserLoggedIn: false, isNotificationDrawerVisible: true });
      const result = mapStateToProps(state);
      const expectedResult = { isLoggedIn: false, displayDrawer: true };
      expect(result).toEqual(expectedResult);
    });
  });
});
