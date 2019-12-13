$(document).ready(function(){
const timerslotEl = $("#timerslot")
const mainEl = document.getElementById("main");
const qholder = document.querySelector(".questionholder");


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
    document.getElementById("quiz1").innerHTML = "Answer the following questions in this quiz within the time limit. Keep in mind that incorrect answers will come with a penalty and will impact your score/time by nine seconds.";
    
    setTime();
        elephant();
}

function elephant() {
    // questions.forEach(element => {
        
    // });
    for (i = 0; i < questions.length; i++) {
        var qtitle = document.createElement('h2');
        qtitle.innerHTML = questions[i].title;
        // $(".qholder").append("foo");
        qholder.append(qtitle);
        // document.qholder.appendChild(qtitle);

        console.log(questions[i].title);
    }
}

function sendMessage() {
    timerslotEl.textContent = " ";

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
    {
        title: "Question 5",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        answer: "choice 4"
    },
    {
        title: "Question 6",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        answer: "choice 3"
    },
    {
        title: "Question 7",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        answer: "choice 1"
    },
    {
        title: "Question 8",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4"],
        answer: "choice 4"
    },

]
$("#startQuiz").click(startQuiz);
});