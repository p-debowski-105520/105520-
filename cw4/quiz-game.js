const questions = [
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2"],
        answer: "H2O"
    },
    {
        category: "Geography",
        question: "Which is the largest continent by area?",
        choices: ["Africa", "Asia", "Europe"],
        answer: "Asia"
    },
    {
        category: "Mathematics",
        question: "What is the value of pi (π) rounded to two decimal places?",
        choices: ["3.14", "2.72", "1.61"],
        answer: "3.14"
    },
    {
        category: "History",
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
        answer: "George Washington"
    },
    {
        category: "Technology",
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "High Tech Machine Learning", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    }
];

function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}

const randomQuestion = getRandomQuestion(questions);
console.log(`Category: ${randomQuestion.category}`);
console.log(`Question: ${randomQuestion.question}`);
console.log(`Choices: ${randomQuestion.choices.join(", ")}`);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(`Computer's Choice: ${computerChoice}`);

const result = getResults(randomQuestion, computerChoice);
console.log(result);
