import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import {getLatestNotification} from '../utils/utils';

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
      expect(wrapper.contains(<Login />)).toBe(true);
    });

    it('renders contain the Footer component', () => {
      expect(wrapper.contains(<Footer />)).toBe(true);
    });

    it('renders not contain the CourseList component', () => {
      expect(wrapper.contains(<CourseList />)).toBe(false);
    });
  })

  describe('When isLoggedIn = true', () => {

    it('renders the component CourseList whereas Login', () => {
      const listCourses = [
        {id: 1, name: "ES6", credit: 60},
        {id: 2, name: "Webpack", credit: 20},
        {id: 3, name: "React", credit: 40},
      ]
      const wrapper = shallow(<App isLoggedIn={true}/>);
      expect(wrapper.contains(<CourseList listCourses={listCourses}/>)).toBe(true);
      expect(wrapper.contains(<Login />)).toBe(false);
    });

    it('calls logOut function when keys Control and H are pressed', () => {
      const logOutMock = jest.fn();
      shallow(<App logOut={logOutMock} />);

      const alert = jest.spyOn(global, 'alert');
      expect(alert);
      expect(logOutMock);

      jest.restoreAllMocks();
    });
  });

  describe('Check displayDrawer', () => {
    it('when the App component is called, the notifications are not display', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('when the method handleDisplayDrawer is spied, the state of displayDrawer change on true', () => {
      const wrapper = shallow(<App />);

      const handleDisplayDrawerSpy = jest.spyOn(wrapper.instance(), 'handleDisplayDrawer');
      handleDisplayDrawerSpy();
      expect(handleDisplayDrawerSpy).toHaveBeenCalled();

      wrapper.setState({ displayDrawer: true });
      expect(wrapper.state('displayDrawer')).toBe(true);

      jest.restoreAllMocks();
    });

    it('when the method handleDisplayDrawer is called, the state of displayDrawer change on true', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().handleDisplayDrawer();
      expect(wrapper.state('displayDrawer')).toBe(true);
    });

    it('when the method handleHideDrawer is spied, the state of displayDrawer change on false', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ displayDrawer: true });

      const handleHideDrawerSpy = jest.spyOn(wrapper.instance(), 'handleHideDrawer');
      handleHideDrawerSpy();
      expect(handleHideDrawerSpy).toHaveBeenCalled();

      wrapper.setState({ displayDrawer: false });
      expect(wrapper.state('displayDrawer')).toBe(false);

      jest.restoreAllMocks();
    });

    it('when the method handleHideDrawer is called, the state of displayDrawer change on false', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().handleDisplayDrawer();
      wrapper.instance().handleHideDrawer();
      expect(wrapper.state('displayDrawer')).toBe(false);
    });
  });
});
