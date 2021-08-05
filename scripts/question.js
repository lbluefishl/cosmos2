const summaryButton = document.querySelector('#summary');
const submitButton = document.querySelector('#submit');
const skipButton = document.querySelector('#skip');
const topic = document.querySelector('body').id;
const questionId = document.querySelector('body').id + '-' + document.querySelector('main').id;
const nextQuestionId = document.querySelector('body').id + '-' + (+document.querySelector('main').id + 1);
const correctAnswerField = document.querySelector('.c');
const correctAnswer = correctAnswerField.querySelector('input');
const incorrectAnswers = document.querySelectorAll('.ic');
const inputs = document.querySelectorAll('input');
const explanation = document.querySelector('#explanation');
 
skipButton.addEventListener('click', nextQuestion);
summaryButton.addEventListener('click', goSummary);
submitButton.addEventListener('click', submitAnswer);
 
function nextQuestion() {
    window.location.href = `${nextQuestionId}.html`;
}
 
function goSummary() {
    window.location.href = `${topic}-summary.html`;
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
}
