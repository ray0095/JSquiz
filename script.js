// Selects element by class
var timer = document.querySelector(".time");
var timeLeft = 60;
var points = 0;
var main = document.querySelector("#main");
//Quiz questions and answers

const quizQuestions = [
    {
        question: "INSERT QUESTION ONE",
        answers: {
            a: "ANSWER ONE",
            b: "ANSWER TWO",
            c: "ANSWER THREE",
        },
        correctAnswer: "c"
    },
    {
        question: "INSERT QUESTION TWO",
        answers: {
            a: "ANSWER ONE",
            b: "ANSWER TWO",
            c: "ANSWER THREE",
        },
        correctAnswer: "a"
        },  
    {
        question: "INSERT QUESTION THREE",
        answers: {
            a: "ANSWER ONE",
            b: "ANSWER TWO",
            c: "ANSWER THREE",
        },
        correctAnswer: "b"
        }  
];

function startQuiz (){ //Start game function applied to button
    setTime();
    javaQuiz ();
}

function setTime() { //Countdown function
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = timeLeft;

    if(timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      endQuiz();
      return;
    }
  }, 1000);
}

function endQuiz() { //Alert for when timer runs out
  window.alert("Time's UP!");
}


//Quiz question function
function javaQuiz () {
  const output = []; //constant for html display of questions and answer choices
  document.getElementById("startButton").style.display ="none"; //start button is no longer displayed
  document.getElementById("quizTitle").style.display="none"; //h1 content is no longer displayed
  document.getElementById("quiz-content").style.display="none"//h2 content is no longer displayed

//question is selected from array above 
quizQuestions.forEach(
    (currentQuestion, questionNumber) => {
    const answers = []; //answer choices array 
    for(letter in currentQuestion.answers){//for loop to run on each answer choice in current Question
      answers.push( //adding each answer choice to empty "answers" array
        `<label> 
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label>`
      ); // HTML added 
    }
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
    );
}

);
main.innerHTML = output.join('');
//main content changes to question
//answer choices are displayed as buttons 
//if user's button choice === correct answer then points++
//if user's button choise !== correct answer then timeLeft--
}


