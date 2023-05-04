import './body.css'
import $ from 'jquery';
import _ from 'lodash';

function appendToBody() {
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button type="button">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
}

function updateCounter() {
    let count = 0;
    $('button').on('click', _.debounce(() => {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }, 500));
}

$(() => {
    appendToBody();
    updateCounter();
});
