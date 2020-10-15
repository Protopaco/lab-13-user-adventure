
// const userKey = 'USER_';

export function setUserLocalStorage(userKey, object){
    console.log('key: ' +userKey);
    console.log('object: ' +object);
    localStorage.setItem(userKey, JSON.stringify(object));
}

export function getUserLocalStorage(userKey){
    return JSON.parse(localStorage.getItem(userKey));
}