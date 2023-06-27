import { courseReducer } from '../reducers/courseReducer';
import { getListCourses } from './courseSelector';
import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('selectorCourses tests', () => {
    it('check that getListCourses returns a list of all courses', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                {
                    "id": "1",
                    "name": "ES6",
                    "credit": 60
                },
                {
                    "id": "2",
                    "name": "Webpack",
                    "credit": 20
                },
                {
                    "id": "3",
                    "name": "React",
                    "credit": 40
                }
            ]
        };

        const initialState = {
            courses: fromJS([])
        };

        initialState.courses = courseReducer(undefined, action);
        const courses = getListCourses(initialState);
        expect(courses.count()).toBe(3);
    });
});