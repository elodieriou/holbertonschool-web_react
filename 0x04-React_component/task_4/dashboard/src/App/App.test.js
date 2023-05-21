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
      const appBody = wrapper.find('.App-body');
      expect(appBody).toHaveLength(1);
    });

    it('renders contain the Notifications component', () => {
      const listNotifications = [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: {__html: getLatestNotification()}},
      ]
      expect(wrapper.contains(<Notifications listNotifications={listNotifications}/>)).toBe(true);
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
});
