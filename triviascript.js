//start the btn element creation, capturing the id, from the html:

const startBtn = document.getElementById('start-btn');

// question element bucket capture from the id given in the html.
const qBucket = document.getElementById('question-container')

//Creation of a question and answer array.  Nesting arrays within arrays was the hint by J.J.  from Thursday......Search how , and find a way to pick the questions/answer options randomly, maybe using the Math.random, coding.  -------Also look at how to place the text inside the button boxed rather than next to them. maybe true false recognition idea on the answers. ???  I don't know yet. 'Queries' will be entered into the moveNextQ( PLACED HERE ) 

const queries = [{
            Query1: 'Hello to question number one.',
            response1: [
                { text: 'this is not the answer A', correct: false },
                { text: 'this is not the answer B', correct: false },
                { text: 'this is not the answer C', correct: false },
                { text: 'this is is the answer D ', correct: true },
            ]

        }

    ]
    //Add the listening event, for a click on the start button.btn

startBtn.addEventListener('click', startQuiz);



function startQuiz() {
    //confirm button click listern thru console log.
    console.log('let the TRIVIA BEGIN.')
        // found on video, youtube.... using "classList" to hid the start button after click.
    startBtn.classList.add('hide')
        // and then reverse the hide from CSS, after click and hide of startbtn. this will make the question bucket show up.
    qBucket.classList.remove('hide')
        // this fuction will capture array elements as shown above in the questions/answers nested arrays.
    moveNextQ(queries)
}
// function timeKeeper(params) {

// }

// function timeKeeper(params) {

// }

// function moveNextQ() {

// }

// function pickAnswer(params) {

// }

// function kpscore(params) {

// }

// function writeHighScore() {

// }