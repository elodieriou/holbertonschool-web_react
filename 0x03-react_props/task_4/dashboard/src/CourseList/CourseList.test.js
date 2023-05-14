import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CourseList />);
    });

    it('renders CourseList component without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders 5 rows', () => {
        const row = wrapper.find('CourseListRow');
        expect(row).toHaveLength(5);
        expect(row.at(0).html()).toEqual('<tr><th colSpan="2">Available courses</th></tr>');
        expect(row.at(1).html()).toEqual('<tr><th>Course name</th><th>Credit</th></tr>');
        expect(row.at(2).html()).toEqual('<tr><td>ES6</td><td>60</td></tr>');
        expect(row.at(3).html()).toEqual('<tr><td>Webpack</td><td>20</td></tr>');
        expect(row.at(4).html()).toEqual('<tr><td>React</td><td>40</td></tr>');
    });
});