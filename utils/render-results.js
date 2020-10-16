import { getUserLocalStorage } from './manage-local-storage.js';

export function renderResults(userId){
    let userData = getUserLocalStorage(userId);

    return document.createElement('p');

}

