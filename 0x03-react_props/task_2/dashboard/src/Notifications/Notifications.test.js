import React from 'react';
import { shallow } from 'enzyme';
import Notifications from "./Notifications";

describe('Notifications component tests', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    it('renders Notifications component without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the text', () => {
        const textElement = wrapper.find('p');
        expect(textElement.text()).toBe('Here is the list of notifications');
    });

    it('renders NotificationsItem component', () => {
        const list = wrapper.find('ul');
        const listItems = list.find('NotificationsItem');
        expect(listItems).toHaveLength(3);
        expect(listItems.first().html()).toEqual('<li data-notification-type="default">New course available</li>')
    });
});
