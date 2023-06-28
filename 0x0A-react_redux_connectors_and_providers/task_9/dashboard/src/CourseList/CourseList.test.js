import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';
import { fromJS } from 'immutable';
import {fetchCourses} from "../actions/courseActionCreators";

describe('CourseList component tests', () => {

    describe('When listCourse is not empty', () => {
        let wrapper;

        beforeEach(() => {
            const listCourses = [
                {id: 1, name: "ES6", credit: 60},
                {id: 2, name: "Webpack", credit: 20},
                {id: 3, name: "React", credit: 40},
            ];
            wrapper = shallow(<CourseList listCourses={listCourses}/>);
        });

        it('renders CourseList component without crashing', () => {
            expect(wrapper.exists()).toBe(true);
        });

        it('renders 5 rows', () => {
            const row = wrapper.find('CourseListRow');
            expect(row).toHaveLength(5);
        });
    });

    describe('When listCourse is empty', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<CourseList listCourses={[]}/>);
        });

        it('renders CourseList component without crashing', () => {
            expect(wrapper.exists()).toBe(true);
        });

        it('renders only headers and text "No course available yet"', () => {
            const row = wrapper.find('CourseListRow');
            expect(row).toHaveLength(3);
            expect(row.at(2).prop('textFirstCell')).toEqual('No course available yet');
        });
    });

    describe('Actions dispatched', () => {

        let listCourses;

        beforeEach(() => {
            listCourses = [
                {id: 1, name: "ES6", credit: 60},
                {id: 2, name: "Webpack", credit: 20},
                {id: 3, name: "React", credit: 40},
            ];

        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('check if fetchCourses action is dispatched when the component is mounted', () => {
            const fetchCourses = jest.fn();
            shallow(<CourseList listCourses={listCourses} fetchCourses={fetchCourses}/>);
            expect(fetchCourses).toHaveBeenCalledTimes(1);
        });

        it('check if selectCourse action is dispatched when the onChangeRow function is called', () => {
            const selectCourse = jest.fn();
            const wrapper = shallow(<CourseList
                listCourses={listCourses}
                selectCourse={selectCourse}
                fetchCourses={fetchCourses}
            />);
            wrapper.instance().onChangeRow(1, true);
            expect(selectCourse).toHaveBeenCalledTimes(1);

        });

        it('check if unSelectCourse action is dispatched when the onChangeRow function is called', () => {
            const unSelectCourse = jest.fn();
            const wrapper = shallow(<CourseList
                listCourses={listCourses}
                unSelectCourse={unSelectCourse}
                fetchCourses={fetchCourses}
            />);
            wrapper.instance().onChangeRow(1, false);
            expect(unSelectCourse).toHaveBeenCalledTimes(1);
        });
    });
});
