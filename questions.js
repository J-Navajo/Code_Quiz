$(document).ready(function(){
const timerslotEl = $("#timerslot")
const mainEl = $("#main");
const qholder = $(".questionholder");
const h2El = $("h2");
let counter = 0;
const cquestion = $("#currentquestion");
const qtitle = $("#questionholder");


timerslotEl.hide();
let secondsLeft = 120;

function setTime() {
    timerslotEl.show();
    const timerInterval = setInterval(function(){
        secondsLeft--;
        timerslotEl.text(secondsLeft + " time left.");

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
function startQuiz() {
    $("#startQuiz").hide();
    
    setTime();
        askquestion();
}

function askquestion() {
    $("#questionholder").empty();
    // questions.forEach(element => {
        
    // });

    // qtitle.innerHTML = questions[i].title;
    qtitle.html(questions[counter].title); 
    // (whatever I want to appear on the page I would set up this way. )

    for (let i = 0; i < questions[counter].choices.length; i++) {
        // questions[counting through the number of questions].and going through all of the choices until it runs out
        const qchoices = $("<button>");
        // anytime creating an element use angle braces for example <button>
        qchoices.click(answerclick).text(questions[counter].choices[i]);
        
        $("#questionholder").append(qchoices);
        // we don't need quotes around qchoices because it is a variable that's equal to an element (button) which is already in quotes.
        
        console.log(questions[i].title);
    }
}

function answerclick () {
    counter++
    askquestion();
    // take whatever it is now and add one
}

function sendMessage() {
    timerslotEl.textContent = "words in here";
    // timerslotEl.text("any text I want to show on the page and will show in the timerslot div") 

    // const textEl = document.createElement("text");

    h2El.textContent = "End of Quiz"

    mainEl.appendChild(h2El);
}




const questions = [
    {
        title: "Question 1",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        answer: "choice 3"
    },
    {
        title: "Question 2",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        answer: "choice 2"
    },
    {
        title: "Question 3",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        answer: "choice 1"
    },
    {
        title: "Question 4",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        answer: "choice 2"
    },

]
// $("#startQuiz").click(button);
$("#startQuiz").click(startQuiz);
});