import './footer.css'
import $ from 'jquery';

function appendToFooter() {
    $('body').append('<p>Copyright - Holberton School</p>');
}

$(() => {
    appendToFooter();
});
