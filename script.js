// Selects element by class
var timer = document.querySelector(".time");
var timeLeft = 60;

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
    }
  }, 1000);
}

function endQuiz() { //Alert for when timer runs out
  window.alert("Time's UP!");
}


//Quiz question function
function javaQuiz () {

}


