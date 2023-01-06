
// Global Var
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("backgroundTimerGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");

var question = [
    {
        question: 'Which of the folowing is not a Javascript datatype?',
        answers: [
            'Null',
            'Boolean',
            'Java',
            'Number'
        ],
        correctAnswer: 'Java'
    },    {
        question: 'Javascript is what type of language?',
        answers: [
            'Object-oriented',
            'Object-based',
            'Procedural',
            'None of the above'
        ],
        correctAnswer: 'Object-oriented'
    },
    {
        question: 'Which of the folowing methods is used to access HTML elements using Javascript?',
        answers: [
            'getElementbyID()',
            'getElementsByClassName',
            'A & B',
            'None of the above'
        ],
        correctAnswer: 'A & B'
    },
    {
        question: 'Which of the folowing keywords is used to define a variable in Javascript',
        answers: [
            'var',
            'let',
            'A & B',
            'None of the above'
        ],
        correctAnswer: 'A & B'
    },
    {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        answers: [
            'stringify()',
            'parse()',
            'convert()',
            'None of the above'
        ],
        correctAnswer: 'stringify()'
    },
]
//Varibales for question length, init question nuber an question count, 
// create some variables

var lastQuestion = question.length - 1;
let runningQuestion = 0;
let count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = question[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct


// answer is Wrong



//QUIZ START
//Event listener
//start quiz fxn



//TODO: create array of questions

















