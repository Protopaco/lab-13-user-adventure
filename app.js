// import functions and grab DOM elements
import { getUserLocalStorage } from '../utils/manage-local-storage.js';
import { renderUserInput } from '../utils/render-user-input.js';
import { renderChoices } from './utils/render-choices.js';
// initialize state

// set event listeners to update state and DOM

let searchParams = new URLSearchParams(window.location.search);
// console.log(searchParams.get('id'));
const mainSection = document.getElementById('main-section');
const userObject = getUserLocalStorage(searchParams.get('id'));
// mainSection.innerHTML = '';
// let element;

// if (!searchParams.get('id')) {
//     element = renderUserInput();

// } else if (searchParams.get('id') === 'question'){
//     element = renderQuestion(searchParams.get('name'));

// } else {
//     element = renderChoices();
//     // mainSection.appendChild(element);
//     }

// mainSection.appendChild(element);
