import React from 'react';
import { fromJS } from 'immutable';

import { mapStateToProps } from './App';

describe('App component tests', () => {

  describe('Check mapStateToProps', () => {

    it('verify if the function return the right object', () => {
      let state = fromJS({ isUserLoggedIn: true });
      const result = mapStateToProps(state);
      const expectedResult = { isLoggedIn: true };
      expect(result).toEqual(expectedResult);
    });
  });
});
