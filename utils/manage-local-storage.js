
const userKey = 'USER_';

export function setUserLocalStorage(object){
    localStorage.setItem(userKey, JSON.stringify(object));
}

export function getUserLocalStorage(){
    return JSON.parse(localStorage.getItem(userKey));
}