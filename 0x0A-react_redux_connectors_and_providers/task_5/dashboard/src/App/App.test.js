import React from 'react';
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('App component tests', () => {

  describe('Check mapStateToProps', () => {

    it('verify that return the right object if only isUserLoggedIn is passed', () => {
      let state = { ui: fromJS(  { isUserLoggedIn: true }) };
      const result = mapStateToProps(state);
      const expectedResult = { isLoggedIn: true, displayDrawer: undefined };
      expect(result).toEqual(expectedResult);
    });

    it('verify that return the right object if only isNotificationDrawerVisible is passed', () => {
      let state = { ui: fromJS({ isNotificationDrawerVisible: true }) };
      const result = mapStateToProps(state);
      const expectedResult = { isLoggedIn: undefined, displayDrawer: true };
      expect(result).toEqual(expectedResult);
    });

    it('verify that return the right object if isUserLoggedIn and isNotificationDrawerVisible are passed', () => {
      let state = { ui: fromJS({ isUserLoggedIn: false, isNotificationDrawerVisible: true }) };
      const result = mapStateToProps(state);
      const expectedResult = { isLoggedIn: false, displayDrawer: true };
      expect(result).toEqual(expectedResult);
    });
  });
});
