const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('question-counter');
const scoreText = document.getElementById('score');
console.log(choices)

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score =0;
    availableQuestion = [...questions];
    console.log(availableQuestion);
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS){
        return window.location.assign('end.html');
    }
    localStorage.setItem('mostRecentScore', score);

    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
    const questionIndex = Math.floor(Math.random()*availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestion.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectChoice = e.target;
        const selectedAnswer = selectChoice.dataset['number'];

        var classToApply = 'incorrect';
            if (selectedAnswer == currentQuestion.answer) {
                classToApply = 'correct';
            }

        if(classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        console.log(classToApply);


        selectChoice.parentElement.classList.add(classToApply);
        setTimeout( () => {
            selectChoice.parentElement.classList.remove(classToApply);

            getNewQuestion();
        }, 1000);

;    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

setTime = () => {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timer.textContent = timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  
startGame();