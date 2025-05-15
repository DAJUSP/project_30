const questions = [
    {
        question: "which is largest animal in the world ?",
        answers: [
            { Text: "shark", correct: false },
            { Text: "Blue whale", correct: True },
            { Text: "Elephant", correct: false },
            { Text: "Zibra", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { Text: "Venus", correct: false },
            { Text: "Mars", correct: True },
            { Text: "Jupiter", correct: false },
            { Text: "Saturn", correct: false },
        ]
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        answers: [
            { Text: "William Wordsworth", correct: false },
            { Text: "Charles Dickens", correct: false },
            { Text: "William Shakespeare", correct: True },
            { Text: "Jane Austen", correct: false },
        ]
    },
    {
        question: "Which is the largest ocean on Earth? ?",
        answers: [
            { Text: "Atlantic Ocean", correct: false },
            { Text: "Indian Ocean", correct: false },
            { Text: "Arctic Ocean", correct: false },
            { Text: "Pacific Ocean", correct: True },
        ]
    },
    {
        question: "Who was the first person to walk on the Moon?",
        answers: [
            { Text: "Neil Armstrong", correct: True },
            { Text: "Buzz Aldrin", correct: false },
            { Text: "Yuri Gagarin", correct: false },
            { Text: "Michael Collins", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButton.firstChild);
    }
}

startQuiz();