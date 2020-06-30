//start the btn element creation, capturing the id, from the html:

const startButton = document.getElementById('start-btn');
//next the btn element creation, capturing the id, from the html:

const nextButton = document.getElementById('next-btn');

// // question element bucket capture from the id given in the html.
const questionContainerElement = document.getElementById('question-container')

// //question bucket identification in justifyContent: 
const questionElement = document.getElementById('question')

// // identify the response buttons by creating the element for them, using the unique identifier
const answerButtonsElement = document.getElementById('answer-buttons')

// //Creation of a question and answer array.  Nesting arrays within arrays was the hint by J.J.  from Thursday......Search how , and find a way to pick the questions/answer options randomly???,  It shows on the assets, but not on the readme.....????? maybe using the Math.random, coding.  -------Also look at how to place the text inside the button boxed rather than next to them. maybe true false recognition idea on the answers. ???  I don't know yet. 'Queries' will be entered into the moveNextQ( PLACED HERE ) 
//     // Here is an example of how to make the array for questions, 
//     //     Query: 'Hello to Question number 2',
//     //     response: [
//     //         { text: 'this is not the answer A', correct: false },
//     //         { text: 'this is not the answer B', correct: false },
//     //         { text: 'this is the answer C', correct: true },
//     //         { text: 'this is not the answer D ', correct: false },
//     //     ]
//     // }, ]
// ];

const questions = [{
        question: 'Inside which HTML element do we put the JavaScript',
        answers: [
            { text: '<JavaScript>', correct: false },
            { text: '<js>', correct: false },
            { text: '<Java?', correct: false },
            { text: '<script> ', correct: true },
        ]

    },
    {
        question: 'Where is teh correct place to insert a JavaScript',
        answers: [
            { text: 'In a cup of coffee', correct: false },
            { text: 'the <head>', correct: false },
            { text: 'both the <head> section and the <body> section', correct: true },
            { text: 'the <body> ', correct: false },
        ]

    },
    {
        question: 'What is the correct syntax for referring to an external script called.',
        answers: [
            { text: '<script id=ref xxx.js', correct: false },
            { text: "<script src='xxx.js'", correct: true },
            { text: "script href='xxx.js'", correct: false },
            { text: "<script ext='xxx.js'", correct: false },
        ]

    },
    {
        question: 'The external JavaScript must contain a <Javascript> tag.',
        answers: [

            { text: 'True', correct: false },
            { text: 'False', correct: true },
        ]

    },
    {
        question: "How do you write 'GIVE ME AN A' in an alert box",
        answers: [
            { text: "msgBox('Give Me an A')", correct: false },
            { text: "alert('Give Me an A)", correct: false },
            { text: "msg('GIVE ME AN A)", correct: false },
            { text: "alert('GIVE ME AN A')", correct: true },
        ]

    }
];

// //create undefined variables for new and current queries to be updated.
// let newQueries = [] these didn't work.
// let queryIndex = [] these didn't work.
let shuffledQuestions, currentQuestionsIndex;
// //Add the listening event, for a click on the start button.btn 

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    nextQ()
});


function startQuiz() {
    //     confirm button click listern thru console log.
    console.log('let the TRIVIA BEGIN.');
    //     // found on video, youtube.... using "classList" to hid the start button after click.
    startButton.classList.add('hide');
    //     // choose the questions in the array at random
    //     newQueries = quizz.sort(() => Math.random() - .5);
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    //     //set the index for the current query to nothing.
    //     currentQueries = 0;
    currentQuestionsIndex = 0
        //     // and then reverse the hide from CSS, after click and hide of startbtn. this will make the question bucket show up.
    questionContainerElement.classList.remove('hide');
    //     // this fuction will capture array elements as shown above in the questions/answers nested arrays.
    nextQ();
}

function nextQ() {
    resetState()
        //     pickQuestion(newQueries[queryIndex]);
    showQuestion(shuffledQuestions[currentQuestionsIndex]);

}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);

    })

};

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
};

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')

    } else {
        startButton.innerText = 'RESTART';
        startButton.classList.remove('hide');

    } //else
    ///////////////////////////////////////////////////////////////////THIS IS WHERE I ADD IN THE INPUT CARD FOR INITIALS AND SCORES?????????????????????????????????????????????
};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
};
// // function timeKeeper(params) {

// // }

// // function timeKeeper(params) {

// // }



// // function kpscore(params) {

// // }

// // function writeHighScore() {

// // }