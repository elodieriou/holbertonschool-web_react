import { markAsARead, setNotificationFilter } from './notificationActionCreators';
import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters
} from './notificationActionTypes';

describe('Notification actions creators tests', () => {

    it('test action created on mark as a read', () => {
        const actionMarkAsARead =  {
            type: MARK_AS_READ,
            index: 1
        };
        expect(markAsARead(1)).toEqual(actionMarkAsARead);
    });

    it('test action created on set notification filter default', () => {
        const actionSetFilterDefault = {
            type: SET_TYPE_FILTER,
            filter: 'DEFAULT'
        };
        expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(actionSetFilterDefault);
    });

    it('test action created on set notification filter urgent', () => {
        const actionSetFilterUrgent = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT'
        };
        expect(setNotificationFilter(NotificationTypeFilters.URGENT)).toEqual(actionSetFilterUrgent);
    });
});
