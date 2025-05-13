const questions=[
    {
        question: "which is largest animal in the world ?",
        answers: [
            {Text: "shark", correct: false},
            {Text: "Blue whale", correct: True},
            {Text: "Elephant", correct: false},
            {Text: "Zibra", correct: false},
        ]
    },
    {
         question: "which is largest animal in the world ?",
        answers: [
            {Text: "shark", correct: false},
            {Text: "Blue whale", correct: True},
            {Text: "Elephant", correct: false},
            {Text: "Zibra", correct: false},
        ]
    },
     {
         question: "which is largest animal in the world ?",
        answers: [
            {Text: "shark", correct: false},
            {Text: "Blue whale", correct: True},
            {Text: "Elephant", correct: false},
            {Text: "Zibra", correct: false},
        ]
    },
     {
         question: "which is largest animal in the world ?",
        answers: [
            {Text: "shark", correct: false},
            {Text: "Blue whale", correct: True},
            {Text: "Elephant", correct: false},
            {Text: "Zibra", correct: false},
        ]
    },
     {
         question: "which is largest animal in the world ?",
        answers: [
            {Text: "shark", correct: false},
            {Text: "Blue whale", correct: True},
            {Text: "Elephant", correct: false},
            {Text: "Zibra", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo + ". " + currentQuestion.question;
}