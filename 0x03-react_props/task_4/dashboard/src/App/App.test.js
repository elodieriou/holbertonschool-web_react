import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';

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
      expect(wrapper.contains(<Notifications />)).toBe(true);
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
      const wrapper = shallow(<App isLoggedIn={true}/>);
      expect(wrapper.contains(<CourseList />)).toBe(true);
      expect(wrapper.contains(<Login />)).toBe(false);
    });
  });
});
