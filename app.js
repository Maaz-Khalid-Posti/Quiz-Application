var questions = [
    {
        question: "Html Stands For _______________________",
        options: ["Hyper Text Makeup Language", "html", "Case Cading Style Sheet", "Hypertext markup language"],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _______________________",
        options: ["Casecading Style Sheet", "Java", "Ram", "Hypertext markup language"],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _______________________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For _______________________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For _______________________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For _______________________",
        options: ["Hyper Text Markup Language", "html", "HTml", "Read Only Memory"],
        correctAns: "Read Only Memory",
    },
];

var displayQuestion = document.getElementById("displayQuestion");
var optionParent = document.getElementById("optionParent");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var quizDisplay = document.getElementById("quizdisplay");
var resultDisplay = document.getElementById("resultDisplay");
var percentage = document.getElementById("percentage");
var indexValue = 0;
var marks = 0;

function ShowQuestion() {
    displayQuestion.innerHTML = questions[indexValue].question;

    for (var i = 0; i < questions[indexValue].options.length; i++) {
        var optValue = questions[indexValue].options[i];
        optionParent.innerHTML += `<button onclick="checkQuestion('${optValue}', '${questions[indexValue].correctAns}')" class="btn p-3 text-white rounded-pill bg-danger m-2">${questions[indexValue].options[i]}</button>`;
    }
    totalQuestionNumber.innerHTML = questions.length;
    currentQuestionNumber.innerHTML = indexValue + 1;
}

ShowQuestion();

function nextQuestion() {
    optionParent.innerHTML = "";
    if (indexValue + 1 == questions.length) {
        resultDisplay.style.display = "block";
        quizDisplay.style.display = "none";

        var totalPercentage = ((marks / questions.length) * 100).toFixed(2); // Calculate percentage with two decimal places
        percentage.innerHTML = totalPercentage;

    } else {
        indexValue++;
        ShowQuestion();

    }
}

function checkQuestion(optionValue, correctValue) {
    if (optionValue === correctValue) {
        marks++;
    }
    nextQuestion();
}

function restartQuiz() {
    indexValue = 0;
    marks = 0;
    resultDisplay.style.display = "none";
    quizDisplay.style.display = "block";
    ShowQuestion();
}