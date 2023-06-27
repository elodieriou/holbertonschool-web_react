import {
    fetchCourses,
    selectCourse,
    setCourses,
    unSelectCourse
} from './courseActionCreators';
import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE
} from './courseActionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Courses actions creators tests', () => {

    afterEach(() => {
        fetchMock.restore();
    });

    it('test action created on select course', () => {
        const actionSelect = { type: SELECT_COURSE, index: 1 };
        expect(selectCourse(1)).toEqual(actionSelect);
    });

    it('test action created on unselect course', () => {
        const actionUnSelect = { type: UNSELECT_COURSE, index: 1 };
        expect(unSelectCourse(1)).toEqual(actionUnSelect);
    });

    it('test action created on set courses', () => {
        const actionSetCourses = {
            type: FETCH_COURSE_SUCCESS,
            data: {}
        };
        expect(setCourses({})).toEqual(actionSetCourses);
    });

    it('test action created on fetch all courses', () => {
        const store = mockStore({});
        fetchMock.get('http://localhost:8564/courses.json', {
            status: 200,
            body: {}
        });

        return store
            .dispatch(fetchCourses())
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(setCourses({}))
            });
    });
});
