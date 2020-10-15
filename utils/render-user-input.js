import { setUserLocalStorage } from '../utils/manage-local-storage.js';

export function renderUserInput(){
    let section = document.createElement('section');
    let h1 = document.createElement('h1');
    let img = document.createElement('img');
    let form = document.createElement('form');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let button = document.createElement('button');

    section.classList.add('user-input');

    h1.textContent = 'How do you hide your pain?';

    img.src = './assets/user-input.jpg';
    img.id = 'user-input-photo';

    label.for = "id";
    label.textContent = 'name: ';

    input.name = "id";

    button.id = 'submit';
    button.textContent = 'submit';
    button.onclick =function () {
        setUserLocalStorage(input.value, {
            name: input.value,
            inward: 0,
            outward: 0,
            shutdown: 0,
            completed: [],
        });
        console.log(input.value);
    }

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    section.appendChild(h1);
    section.appendChild(img);
    section.appendChild(form);

    return section;
}