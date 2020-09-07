const quizData = [{
        question: 'How old is James?',
        a: '10',
        b: '17',
        c: '14',
        d: '20',
        correct: 'd'
    },
    {
        question: 'Which is the most popular programming language?',
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: 'C++',
        correct: 'c'
    },
    {
        question: 'What is the fullform of CSS',
        a: 'Cascading Style Sheet',
        b: 'Cascading Spread Sheet',
        c: 'Coding Style Sheet',
        d: 'Class Style Sheet',
        correct: 'a'
    },
    {
        question: 'What is the fullform of HTML',
        a: 'Hypo Text Markup Language',
        b: 'Hyper Text Markup Login',
        c: 'Hyper Text Markup Language',
        d: 'Hyper Text Machine Language',
        correct: 'c'
    },
    {
        question: 'Who invented JS',
        a: 'Bren Stark',
        b: 'Brendan Eich',
        c: 'Brendan Ritchie',
        d: 'Denis Ritchie',
        correct: 'b'
    },
    {
        question: 'Who is the CEO of Apple ',
        a: 'Steven Jobs',
        b: 'Alan Turing',
        c: 'Bill Gates',
        d: 'Steve Jobs',
        correct: 'd'
    },
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelecterAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit')

let currentQuiz = 0;
let answer = undefined;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submit.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizData.innerHTML = `<h2>You answered correctly at
      ${score}/${quizData.length}questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }

});