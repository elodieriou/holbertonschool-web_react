import './header.css'
import $ from 'jquery';

function appendToHeader() {
    $('body').append('<div id="logo"></div>');
    $('body').append('<h1>Holberton Dashboard</h1>');
}

$(() => {
    appendToHeader();
    console.log('Init header');
});
