function getFullYear() {
    const date = new Date();
    return date.getFullYear();
}

function getFooterCopy(isIndex) {
    return (isIndex) ? 'Holberton School' : 'Holberton School main dashboard';
}

function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}

module.exports = {
    getFullYear,
    getFooterCopy,
    getLatestNotification
};
