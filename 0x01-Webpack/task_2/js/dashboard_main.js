import '../css/main.css';
import $ from 'jquery';
import _ from "lodash";

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button type="button">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
    let count = 0;
    $('button').on('click', _.debounce(() => {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }, 500));
}

updateCounter();
