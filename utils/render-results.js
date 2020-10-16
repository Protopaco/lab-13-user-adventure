import { getUserLocalStorage } from './manage-local-storage.js';
import resultsData from '../data/results-data.js'; 

export function renderResults(userId){
    let userData = getUserLocalStorage(userId);
    let returnedResults = returnResult(userData);
    
    let section = document.createElement('section');
    let img = document.createElement('img');
    let titleSpan = document.createElement('span');
    let textSpan = document.createElement('span');
    let resetButton = document.createElement('button');

    section.id = 'results-section';
    
    img.id = 'results-image';
    img.src = returnedResults.img_src;

    titleSpan.id = 'results-title';
    titleSpan.textContent = returnedResults.title;

    textSpan.id = 'results-text';
    textSpan.textContent = returnedResults.text;

    resetButton.id = 'results-button';
    resetButton.textContent = 'try again';
    resetButton.onclick = function() {
        location.href = './';
    }

    section.appendChild(img);
    section.appendChild(titleSpan);
    section.appendChild(textSpan);
    section.appendChild(resetButton);
    
    return section;
}


function returnResult(userData) {
    if (userData.inward > (userData.outward && userData.shutdown)){
        console.log('inward');
        return resultsData.inward;
    } else if (userData.outward > (userData.inward && userData.shutdown)){
        console.log('outward');
        return resultsData.outward;
    } else if (userData.shutdown > (userData.inward && userData.outward)){
        return resultsData.shutdown;
    }
    return resultsData.balanced;
}