function getFullYear() {
    const date = new Date();
    return date.getFullYear();
}

function getFooterCopy(isIndex) {
    return (isIndex) ? 'Holberton School' : 'Holberton School main dashboard';
}

module.exports = {
    getFullYear,
    getFooterCopy
};
