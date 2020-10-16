// import functions and grab DOM elements
import { getUserLocalStorage, setUserLocalStorage } from './manage-local-storage.js';
import { renderUserInput } from './render-user-input.js';
import { renderChoices } from './render-choices.js';
import { renderQuestion } from './render-question.js';
import { renderResults } from './render-results.js';
// initialize state

// set event listeners to update state and DOM

let searchParams = new URLSearchParams(window.location.search);
const mainSection = document.getElementById('main-section');
const userId = searchParams.get('id');
const userObject = getUserLocalStorage(userId);
console.log(userId)

mainSection.innerHTML = '';
let element;

if (!userId) {
    element = renderUserInput();

} else if (searchParams.get('page') === 'question'){
    element = renderQuestion();

} else if (searchParams.get('page') === 'answer'){
    let answer = searchParams.get('answer');
    userObject[answer] += 1;
    userObject.completed.push(searchParams.get('question'))
    setUserLocalStorage(userObject);

    console.log(userObject);

    if (userObject.completed.length < 3){
        element = renderChoices();
    } else {
        element = renderResults();
    }
}

 else {
    element = renderChoices();
    // mainSection.appendChild(element);
    }

mainSection.appendChild(element);
