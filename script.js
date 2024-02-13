//HTML elements
const homePage = document.getElementById("homePage");
const startButton = document.getElementById("startBtn");
const quizPage = document.getElementById("quizPage");
const highScorePage = document.getElementById("highScore{age");
const highScoreButton = document.getElementById("highScoreBtn");
const finalScore = document.getElementById("finalScore");

const buttonA = document.getElementById("A");
const buttonB = document.getElementById("B");
const buttonC = document.getElementById("C");
const buttonD = document.getElementById("D");

const quizQuestions = [
  {
    question: "What is the primary language used for styling?",
    optionA : "CSS",
    optionB : "HTML",
    optionC : "JavaScript",
    optionD : "Python",
    correctAnswer: "A"
  },

  {
    question: "What does WWW stand for?",
    optionA: "World Web Widgets",
    optionB: "World Wide Web",
    optionC: "World Webpage Wonders",
    optionD: "World Wide Want",
    correctAnswer: "B",
  },

  {
    question: "Where is localStorage stored?",
    optionA: "Server",
    optionB: "Database",
    optionC: "Client side",
    optionD: "Cloud",
    correctAnswer: "C",
  }
]