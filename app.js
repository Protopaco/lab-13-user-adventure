// import functions and grab DOM elements
import { getUserLocalStorage, setUserLocalStorage } from '../utils/manage-local-storage.js';
import { renderUserInput } from '../utils/render-user-input.js';
import { renderChoices } from './utils/render-choices.js';
import { renderQuestion } from './utils/render-question.js';
// initialize state

// set event listeners to update state and DOM

let searchParams = new URLSearchParams(window.location.search);
const mainSection = document.getElementById('main-section');
const userObject = getUserLocalStorage();

mainSection.innerHTML = '';
let element;

if (!searchParams.get('id')) {
    element = renderUserInput();

} else if (searchParams.get('page') === 'question'){
    element = renderQuestion(searchParams.get('name'));

} else if (searchParams.get('id') === 'answer'){
    let answer = searchParams.get('name');
    userObject[answer] += 1;
    userObject.completed.push(searchParams.get('question'))
    setUserLocalStorage(userObject);
    console.log(userObject);
    if (userObject.completed.length < 3){
        element = renderChoices();
    } else {
        element = "";
    }
}

 else {
    element = renderChoices();
    // mainSection.appendChild(element);
    }

mainSection.appendChild(element);
