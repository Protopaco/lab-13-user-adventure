import questionData from '../data/question-data.js';

export function renderQuestion (){
    let searchParams = new URLSearchParams(window.location.search);
    let questionName = searchParams.get('name');
    let commaString = ', ';
    let currentQuestion = {};
    let userId = searchParams.get('id');

    for (let questionObject of questionData){
        if(questionName === questionObject.id){
            currentQuestion = questionObject;
        }
    }

    let questionSection = document.createElement('section');
    let frameSection = document.createElement('section')
    let titleSpan = document.createElement('section');
    let titleImage = document.createElement('img');

    let questionCardSection = document.createElement('section');
    let inwardCard = returnCard(currentQuestion.questions.inward, currentQuestion.id, userId);
    let shutdownCard = returnCard(currentQuestion.questions.shutdown, currentQuestion.id, userId);
    let outwardCard = returnCard(currentQuestion.questions.outward, currentQuestion.id, userId);

    questionSection.classList.add('question-section');
    frameSection.classList.add('question-frame');
    
    titleSpan.classList.add('question-title');
    titleSpan.textContent = `${userId}` +commaString +currentQuestion.frame.text;

    titleImage.classList.add('question-frame-image');
    titleImage.src = currentQuestion.frame.img_src;

    questionCardSection.classList.add('question-card-section');

    frameSection.appendChild(titleSpan);
    frameSection.appendChild(titleImage);
    questionCardSection.appendChild(inwardCard);
    questionCardSection.appendChild(shutdownCard);
    questionCardSection.appendChild(outwardCard);

    questionSection.appendChild(frameSection);
    questionSection.appendChild(questionCardSection);

    return questionSection;
}

function returnCard(answerObject, questionId, userId){
    let cardSection = document.createElement('section');
    let cardImage = document.createElement('img');
    let cardSpan = document.createElement('span');

    cardSection.classList.add('question-card');
    cardSection.onclick = function () {
        location.href= `?id=${userId}&question=${questionId}&answer=${answerObject.id}&page=answer`;
    }

    cardImage.classList.add('question-card-image');
    cardImage.src = answerObject.img_src;

    cardSpan.classList.add('question-card-text');
    cardSpan.textContent = answerObject.text;

    cardSection.appendChild(cardImage);
    cardSection.appendChild(cardSpan);
    
    return cardSection;

}