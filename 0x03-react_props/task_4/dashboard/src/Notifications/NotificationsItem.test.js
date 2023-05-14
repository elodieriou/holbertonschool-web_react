import React from 'react';
import { shallow } from 'enzyme';
import NotificationsItem from "./NotificationsItem";

describe('NotificationsItem component tests', () => {

    it('renders NotificationsItem component without crashing', () => {
        const wrapper = shallow(<NotificationsItem />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders type and value props', () => {
        const wrapper = shallow(<NotificationsItem type="urgent" value="test"/>);
        const liItem = wrapper.find('li');
        expect(liItem).toHaveLength(1);
        expect(liItem.prop('data-notification-type')).toEqual('urgent');
        expect(liItem.text()).toEqual('test');
    });

    it('renders html prop', () => {
        const wrapper = shallow(<NotificationsItem html={{ __html: '<u>test</u>' }}/>);
        const liItem = wrapper.find('li');
        expect(liItem).toHaveLength(1);
        expect(liItem.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
    });
});
