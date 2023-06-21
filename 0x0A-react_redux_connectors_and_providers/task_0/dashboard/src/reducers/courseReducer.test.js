import { courseReducer } from './courseReducer';
import { Map, fromJS } from 'immutable';
import {
    SELECT_COURSE,
    UNSELECT_COURSE,
    FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';
import {coursesNormalizer} from "../schema/courses";

describe('courseReducer tests', () => {

    const initialState = [
        {
            id: 1,
            name: 'ES6',
            isSelected: false,
            credit: 60,
        },
        {
            id: 2,
            name: 'Webpack',
            isSelected: false,
            credit: 20,
        },
        {
            id: 3,
            name: 'React',
            isSelected: false,
            credit: 40,
        },
    ];

    it('check that default state returns an empty array', () => {
        const defaultState = [];
        const action = {};
        const reducer = courseReducer(undefined, action);
        expect(reducer).toEqual(Map(defaultState));
    });

    it('check that FETCH_COURSE_SUCCESS returns the data passed', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                {
                    id: 1,
                    name: "ES6",
                    credit: 60
                },
                {
                    id: 2,
                    name: "Webpack",
                    credit: 20
                },
                {
                    id: 3,
                    name: "React",
                    credit: 40
                }
            ]
        };
        const reducer = courseReducer(undefined, action);
        expect(reducer.toJS()).toEqual(coursesNormalizer(initialState));
    });

    it('check that SELECT_COURSE returns the data with isSelected item updated', () => {
        const action = {
            type: SELECT_COURSE,
            index: 2
        };
        const expectedState = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: true,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];
        const reducer = courseReducer(fromJS(coursesNormalizer(initialState)), action);
        expect(reducer.toJS()).toEqual(coursesNormalizer(expectedState));
    });

    it('check that SELECT_COURSE returns the data with isSelected item updated', () => {
        const action = {
            type: UNSELECT_COURSE,
            index: 2
        };
        const expectedState = [
            {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20
            },
            {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40
            }
        ];
        const reducer = courseReducer(fromJS(coursesNormalizer(initialState)), action);
        expect(reducer.toJS()).toEqual(coursesNormalizer(expectedState));
    });
});
