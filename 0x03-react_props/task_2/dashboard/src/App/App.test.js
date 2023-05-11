import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App component tests', () => {

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

  it('contain the Notifications component', () => {
    expect(wrapper.contains(<Notifications />)).toBe(true);
  });

  it('contain the Header component', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('contain the Login component', () => {
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('contain the Footer component', () => {
    expect(wrapper.contains(<Footer />)).toBe(true);
  });
});
