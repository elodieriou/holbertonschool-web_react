import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map, setIn, merge } from 'immutable';

const initialeState = [];

export const courseReducer = (state = Map(initialeState), action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const newState = action.data.map((course) => {
                return {
                    ...course,
                    isSelected: false
                };
            });
            const normalizedData = coursesNormalizer(newState);
            return merge(state, normalizedData);
        case SELECT_COURSE:
            return setIn(state, [String(action.index), 'isSelected'], true);
        case UNSELECT_COURSE:
            return setIn(state,[String(action.index), 'isSelected'], false);
        default:
            return state;
    }
};
