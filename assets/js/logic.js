var questions = document.querySelector("#questions");
const choices = Array.from(document.querySelectorAll(".choice-text"));

var currentQuestion = {};
var correctAnswer = true;
var questionCounter = 0;
var allQuestions = [];
var maxQuestions = 4;

// array of possible questions and answers
 questions = [
    {
      question: "What does HTML stand for?",
      choice1: "Hypertext Markup Language",
      choice2: "Heavy Text Moves Language",
      choice3: "Hypertext Makes Lines",
      choice4: "How Technology Makes Language",
      answer: 2,  
    },
    {
        question: "What do you use to observe an event in JavaScript?",
        choice1: "getAttribute()",
        choice2: "setInterval()",
        choice3: "eventListener()",
        choice4: "JSON.stringify()",
        answer: 3,
    },
    {
        question: "What does JSON stand for?",
        choice1: "Jason",
        choice2: "JavaScript Object Notation",
        choice3: "Join Strings onto Notation",
        choice4: "Just Step Over Numbers",
        answer: 2,
    },
    {
        question: "event.stopPropagation() does what?",
        choice1: "prevents HTML from rendering on the page",
        choice2: "pauses any timer you have set",
        choice3: "turns everything into a string",
        choice4: "prevents event bubbling",
        answer: 4,
    }
]

// function to start game
function startGame() {
    questionCounter = 0;
    allQuestions = [...questions];
    getNewQuestion();
};

// function to cycle through questions array
function getNewQuestion() {
    if (allQuestions.length === 0 || questionCounter > maxQuestions)
    questionCounter++

    const questionsIndex = Math.floor(Math.random() * allQuestions.length);
    currentQuestion = allQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    })

    allQuestions.splice(questionsIndex, 1);
correctAnswer = true;
};

choices.forEach(choices => {
    choices.addEventListener('click', e => {
        if (!correctAnswer) return

        correctAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        // correct after adding in timer
        if (classToApply === 'incorrect') {
            // incrementTime()
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

startGame();
