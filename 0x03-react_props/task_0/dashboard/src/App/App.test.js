import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it.skip('renders a div with the class App-header', () => {
    const appHeader = wrapper.find('.App-header');
    expect(appHeader).toHaveLength(1);
  });

  it.skip('renders a div with the class App-body', () => {
    const appBody = wrapper.find('.App-body');
    expect(appBody).toHaveLength(1);
  });

  it.skip('renders a div with the class App-footer', () => {
    const appFooter= wrapper.find('.App-footer');
    expect(appFooter).toHaveLength(1);
  });
});
