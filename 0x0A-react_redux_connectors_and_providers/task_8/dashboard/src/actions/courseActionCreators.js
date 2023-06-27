import {FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE} from './courseActionTypes';

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index
    };
};

export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index
    };
};

export const setCourses = (data) => {
    return {
        type: FETCH_COURSE_SUCCESS,
        data
    };
};

export const fetchCourses = () => {
    return (dispatch) => {

        return fetch('http://localhost:8564/courses.json')
            .then((response) => response.json())
            .then((response) => dispatch(setCourses(response)))
            .catch((error) => console.log(error))
    }
}
