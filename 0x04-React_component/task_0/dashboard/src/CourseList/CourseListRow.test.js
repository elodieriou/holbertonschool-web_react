import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component tests', () => {

    it('renders CourseListRow component without crashing', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="School" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders when header is true and textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="School"/>);
        const th = wrapper.find('th');
        expect(th).toHaveLength(1);
        expect(th.prop('colSpan')).toEqual(2);
    });

    it('renders when header is true and textSecondCell is not null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="School" textSecondCell="Year" />);
        const th = wrapper.find('th');
        expect(th).toHaveLength(2);
    });

    it('renders when header is false', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="School" textSecondCell="Year"/>);
        const td = wrapper.find('td');
        expect(td).toHaveLength(2);
    });
});
