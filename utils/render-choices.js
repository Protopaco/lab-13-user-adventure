import questionData from '../data/question-data.js';
import { getUserLocalStorage } from './manage-local-storage.js';

export function renderChoices() {
    let userObject = getUserLocalStorage();
    let userId = userObject.name;

    console.log(userObject);
    let section = document.createElement('section');
    let title = document.createElement('p');

    title.textContent = `${userId}, how do you hide your pain?`;
    title.id = 'choice-title';
    section.appendChild(title);
    section.classList.add('card-section');
    
    questionData.forEach(question => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let span = document.createElement('span');
        
        div.classList.add('card');

        if (userObject.completed.includes(question.id)){
            div.classList.add('completed');
        } else {
            div.onclick = function (){
                location.href= `?id=${userId}&page=question&name=${question.id}`;
            }
        }

        img.src = question.preview.img_src;
        img.classList.add('preview-image')

        span.textContent = question.preview.text;
        span.classList.add('preview-text');

        div.appendChild(img);
        div.appendChild(span);
        
        section.appendChild(div);

    })
    return section;
}