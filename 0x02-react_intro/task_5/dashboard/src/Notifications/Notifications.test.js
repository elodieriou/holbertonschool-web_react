import React from 'react';
import { shallow } from 'enzyme';
import Notifications from "./Notifications";

describe('Notifications component tests', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders three list items', () => {
        const list = wrapper.find('ul');
        const listItems = list.find('li');
        expect(listItems).toHaveLength(3);
    });

    it('renders the text', () => {
        const textElement = wrapper.find('p');
        expect(textElement.text()).toBe('Here is the list of notifications');
    });
});
