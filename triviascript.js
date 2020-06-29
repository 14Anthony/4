const startBtn = document.getElementById('start-btn');
const qBucket = document.getElementById('question-container')
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    console.log('let the TRIVIA BEGIN.')
    startBtn.classList.add('hide')
    qBucket.classList.remove('hide')
    moveNextQ()
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