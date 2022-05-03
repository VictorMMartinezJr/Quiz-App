"use strict";

// Quiz Data start
const quizData = [
  {
    img: `/assets/js.png`,
    question: "When was JavaScript created?",
    a: "1995",
    b: "2002",
    c: "1998",
    d: "1992",
    correct: "a",
  },
  {
    img: `/assets/css.png`,
    question: "What should I use to place items next to each other?",
    a: "Margin",
    b: "Padding",
    c: "Grid",
    d: "FlexBox",
    correct: "d",
  },
  {
    img: `/assets/fire.png`,
    question: "What is the most popular programming language in 2022?",
    a: "JavaScript",
    b: "C++",
    c: "Python",
    d: "Java",
    correct: "c",
  },
];
// Quiz Data end

const app = () => {
  // Get elements from HTML start
  const image = document.querySelector(".form-img");
  const question = document.querySelector(".question");
  const answerA = document.getElementById("a-btn");
  const answerB = document.getElementById("b-btn");
  const answerC = document.getElementById("c-btn");
  const answerD = document.getElementById("d-btn");
  const submitBtn = document.querySelector(".submit-btn");
  const answers = document.querySelectorAll(".answer");
  const error = document.querySelector(".error");
  // Get elements from HTML end

  let currentQuiz = 0;
  let selectedAnswer = null;

  console.log(`selected answer : ${selectedAnswer}`);

  // Start Quiz
  const loadQuiz = () => {
    // Update Questionnaire Data start
    image.src = quizData[currentQuiz].img;
    question.innerText = quizData[currentQuiz].question;
    answerA.textContent = quizData[currentQuiz].a;
    answerB.textContent = quizData[currentQuiz].b;
    answerC.textContent = quizData[currentQuiz].c;
    answerD.textContent = quizData[currentQuiz].d;
    // Update Questionnaire Data end

    // Button Click end
    console.log(`current quiz: ${currentQuiz}`, quizData.length);
  };

  // Add click event listeners to each answer start
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      // Remove active class from each answer
      answers.forEach((answer) => {
        if (answer.classList.contains("active"))
          answer.classList.remove("active");
      });
      // Add active class to clicked answer
      answer.classList.add("active");
      selectedAnswer = answer;
      if (error.classList.contains("error-active")) {
        error.classList.remove("error-active");
      }
    });
  });
  // Add click event listeners to each answer end

  // Button Click start
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!selectedAnswer) {
      error.classList.add("error-active");
      console.log("Ran");
    }
    if (
      selectedAnswer &&
      selectedAnswer.dataset.answer === quizData[currentQuiz].correct
    ) {
      if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
      } else {
        currentQuiz = 0;
      }
      selectedAnswer.classList.remove("active");
      selectedAnswer = null;
      console.log(selectedAnswer, "clicked");
      loadQuiz();
    }
  });

  loadQuiz();
};
app();
