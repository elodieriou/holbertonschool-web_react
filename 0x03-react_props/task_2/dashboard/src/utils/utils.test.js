import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils tests', () => {
    test('should returns the full actually year', () => {
        expect(getFullYear()).toEqual(2023);
    });

    test('should returns the good footer if isIndex is true', () => {
        expect(getFooterCopy(true)).toEqual('Holberton School');
    });

    test('should returns the good footer if isIndex is false', () => {
        expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });

    test('should returns the latest notification', () => {
        expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
