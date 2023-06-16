import React from 'react';
import { shallow } from 'enzyme';
import NotificationsItem from './NotificationsItem';

describe('NotificationItem component tests', () => {

    it('renders NotificationItem component without crashing', () => {
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
    });

    it('checks when clicking on an item, the markAsRead function is called with the right id', () => {
        const markAsReadMock = jest.fn();
        const id = 1;
        const props = {
            type: "urgent",
            value: "test",
            markAsRead: markAsReadMock
        };
        const wrapper = shallow(<NotificationsItem {...props} />);
        const markAsRead = wrapper.instance().markAsRead = jest.fn();
        markAsRead(id);

        wrapper.simulate('click');

        expect(markAsReadMock).toHaveBeenCalled();
        expect(markAsRead).toHaveBeenCalledWith(id);

        jest.restoreAllMocks();
    });
});
