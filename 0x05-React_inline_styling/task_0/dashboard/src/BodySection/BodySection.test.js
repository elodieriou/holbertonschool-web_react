import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component tests', () => {

    let wrapper;

    beforeEach(() => {
        const props = {
            title: "test title",
            children: <p>test children node</p>,
        }
        wrapper = shallow(<BodySection { ...props }/>);
    });

    it('renders BodySection component without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders one h2 tag with the text "test title"', () => {
        const h2Item = wrapper.find('h2');
        expect(h2Item).toHaveLength(1);
        expect(h2Item.text()).toEqual('test title');
    });

    it('renders one p tag with the text "test children node"', () => {
        expect(wrapper.containsAllMatchingElements([
            <p>test children node</p>
        ])).toBe(true);
    });
});
