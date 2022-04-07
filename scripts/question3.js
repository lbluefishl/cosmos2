const summaryButton = document.querySelector('#summary');
const submitButton = document.querySelector('#submit');
const skipButton = document.querySelector('#skip');
/*const topic = document.querySelector('body').id;
const nextQuestionId = document.querySelector('body').id + '-' + (+document.querySelector('main').id + 1);
*/
const titleName = document.querySelector('title')
const questionIndex = document.querySelector('main').id;
const questionId = window.location.pathname.split('/')[2].toLowerCase().replace(/%20/g,'-') + "-" + questionIndex;
const correctAnswerField = document.querySelector('.c');
const correctAnswer = correctAnswerField.querySelector('input');
const incorrectAnswers = document.querySelectorAll('.ic');
const inputs = document.querySelectorAll('input');
const explanation = document.querySelector('#explanation');
 
if (skipButton) skipButton.addEventListener('click', nextQuestion);
summaryButton.addEventListener('click', goSummary);
submitButton.addEventListener('click', submitAnswer);

function populateTopic() {
    titleName.innerHTML =  `${window.location.pathname.split('/')[2].replace(/%20/g,' ')} Question ${questionIndex}`
}


function nextQuestion() {
    window.location.href = `question-${+document.querySelector('main').id+ 1}.html`;
}
 
function goSummary() {
    window.location.href = 'summary.html';
}
 
function submitAnswer() {
    if (correctAnswer.checked) {
        correctAnswerField.querySelector('span.option-outcome').innerHTML = 'Correct!';
        correctAnswerField.classList.add('correct');
        disableOptions();
        localStorage.setItem(questionId, +1);
    } else if (document.querySelector('input:checked')) {
        document.querySelector('input:checked').nextElementSibling.nextElementSibling.innerHTML = 'Incorrect!';
        correctAnswerField.querySelector('span.option-outcome').innerHTML = 'Correct!';
        document.querySelector('input:checked').parentElement.classList.add('incorrect');
        correctAnswerField.classList.add('correct');
        disableOptions();
        localStorage.setItem(questionId, +0);
    }
}
 
function disableOptions() {
    inputs.forEach(function (element) {
        element.disabled = true;
    })
    submitButton.disabled = true;
    explanation.style.display = 'block';
    if (skipButton) skipButton.innerHTML = 'Next Question';
}

populateTopic();

