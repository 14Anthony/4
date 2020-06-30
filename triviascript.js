//start the btn element creation, capturing the id, from the html:

const startButton = document.getElementById('start-btn');
//next the btn element creation, capturing the id, from the html:

const nextButton = document.getElementById('next-btn');

//Gameover button that will send people to the High score card.btn
const GAMEOVER = document.getElementById('GAMEOVER-btn');

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
// let newQueries = [] ; let newQueries="these didn't work.
// let queryIndex = [] ; let nqueryIndex these didn't work.
let shuffledQuestions, currentQuestionsIndex;
// //Add the listening event, for a click on the start button send the click to startQuiz function 

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    nextQ()
});

//MDN EXAMPLES
// const div = document.createElement('div');
// div.className = 'foo';

// // our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// div.classList.add("anotherclass");

// // <div class="anotherclass"></div>
// console.log(div.outerHTML);

// // if visible is set remove it, otherwise add it
// div.classList.toggle("visible");

// // add/remove visible, depending on test conditional, i less than 10
// div.classList.toggle("visible", i < 10 );

// console.log(div.classList.contains("foo"));

// // add or remove multiple classes
// div.classList.add("foo", "bar", "baz");
// div.classList.remove("foo", "bar", "baz");

// // add or remove multiple classes using spread syntax
// const cls = ["foo", "bar"];
// div.classList.add(...cls); 
// div.classList.remove(...cls);

// // replace class "foo" with class "bar"
// div.classList.replace("foo", "bar");


function timerFormat(time) {
    //the laregest round integer less than or equal to the result of time divided being by 60
    const minutes = Math.floor(time / 60);
    //seconds are the remainder of the time devided by 60
    let seconds = time % 60;
    //if the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds > 10) {
        seconds = $(seconds);

    }
    return $(minutes).$(seconds);
}

function startQuiz() {
    // sTimer()
    //     confirm button click listern thru console log.
    // console.log('let the TRIVIA BEGIN.');
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
// //Syntax
// const renderedText = htmlElement.innerText
// htmlElement.innerText = string
// Value
// A DOMString representing the rendered text content of an element. If the element itself is not being rendered (e.g detached from the document or is hidden from view), the returned value is the same as the Node.textContent property.
function showQuestion(question) {
    questionElement.innerText = question.question;

    //     Syntax
    // arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
    // Parameters
    // callback
    // Function to execute on each element. It accepts between one and three arguments:
    // currentValue
    // The current element being processed in the array.
    // index Optional
    // The index currentValue in the array.
    // array Optional
    // The array forEach() was called upon.
    // thisArg Optional
    // Value to use as this when executing callback.
    // Return value
    // undefined.

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');

        //make if correct to change check agains the correct databases, and lett the css engage...???
        if (answer.correct) {
            button.dataset.correct = answer.correct

        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);

    })

};

function resetState() {
    //clear the right and wrong background to a neutral state
    clearStatusClass(document.body)
        //hide the next button.  HOw can I move this motion to the selected buttons themselves.??????????why am i having trouble here????  You move and hide, buttons and questions, in the same way????

    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
};
// The event.target property can be used in order to implement event delegation.

// // Make a list
// var ul = document.createElement('ul');
// document.body.appendChild(ul);

// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// ul.appendChild(li1);
// ul.appendChild(li2);

// function hide(e){
//   // e.target refers to the clicked <li> element
//   // This is different than e.currentTarget which would refer to the parent <ul> in this context
//   e.target.style.visibility = 'hidden';
// }

// // Attach the listener to the list
// // It will fire when each <li> is clicked
// ul.addEventListener('click', hide, false);
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
        GAMEOVER.classList.remove('hide');
        GAMEOVER.innerText = 'GAME OVER';
        GAMEOVER.addEventListener('click', ScoreCard)

        questionContainerElement.classList.add('hide');

    } //else
    ///////////////////////////////////////////////////////////////////THIS IS WHERE I ADD IN THE INPUT CARD FOR INITIALS AND SCORES?????????????????????????????????????????????
};

function ScoreCard() {
    let name = prompt("Please Enter your name")
    let score = prompt("Enter your score")
    alert(name + " Your High Score is  " + score)
    GAMEOVER.classList.add("hide")
    startButton.classList.remove('hide');
    startButton.innerText = "Restart"

}

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