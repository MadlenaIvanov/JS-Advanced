// //alert('it works');
// import {
//     sumNumber
// } from './module.js';

// const result = sumNumber(5, 3);
// document.querySelector('main').textContent = `result is ${result}`;

const main = document.querySelector('main');
const title = document.querySelector('h1');

document.querySelector('nav').addEventListener('click', (ev) => {
    switch (ev.target.id) {
        case 'home':
            title.textContent = 'Home Page';
            main.innerHTML = '<p> Home page main content';
            break;
        case 'catalogue':
            title.textContent = 'Catalogue Page';
            main.innerHTML = '<p> Catalogue page main content';
            break;
        case 'about':
            title.textContent = 'About us Page';
            main.innerHTML = '<p> About us page main content';
            break;
    }
})