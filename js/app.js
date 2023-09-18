timeStorage = localStorage;

let stopInterval;

let seconds = 0;

let minuts = 25;

let breakTime = 5;

let workTime = 25;

workBoolean = true;

window.onload = (event) => {
    if(timeStorage!=null){
        minuts = parseInt(localStorage.getItem("timeWork"));
        workTime = parseInt(localStorage.getItem("timeWork"));
        breakTime = parseInt(localStorage.getItem("timeBreak"));
        document.getElementById("textBreakInput").textContent = localStorage.getItem("timeBreak");
        document.getElementById("textWorkInput").textContent = localStorage.getItem("timeWork");
        document.querySelector("#rangeWork").value = localStorage.getItem("timeWork");
        document.querySelector("#rangeBreak").value = localStorage.getItem("timeBreak");
        displayTime();
    }else{
        document.getElementById("timer").textContent = "25:00";
    }
};

//Add input for v2

const workInput = document.querySelector("#rangeWork");
const breakInput = document.querySelector("#rangeBreak");

//Event for changing the break time

breakInput.addEventListener("input", (event) => {
    var breakInputValue = event.target.value;
    if (breakInputValue < 10) {
        document.getElementById("textBreakInput").textContent = `0${breakInputValue}`;
    } else {
        document.getElementById("textBreakInput").textContent = breakInputValue;
    }
    breakTime = breakInputValue;
});

//Event for changing the work time

workInput.addEventListener("input", (event) => {
    var workInputValue = event.target.value;
    if (workInputValue < 10) {
        document.getElementById("textWorkInput").textContent = `0${workInputValue}`;
    } else {
        document.getElementById("textWorkInput").textContent = workInputValue;
    }
    workTime = workInputValue;
    minuts = workInputValue;
    displayTime();
});

//display the time on the chrono

function displayTime() {
    if (seconds < 10) {
        if (minuts < 10) {
            document.getElementById("timer").textContent = `0${minuts}:0${seconds}`;
        } else {
            document.getElementById("timer").textContent = `${minuts}:0${seconds}`;
        }
    } else if (minuts < 10) {
        document.getElementById("timer").textContent = `0${minuts}:${seconds}`;
    } else {
        document.getElementById("timer").textContent = `${minuts}:${seconds}`;
    }
}

//Start the timer when the button start is pressed

function startTimer() {
    localStorage.setItem("timeWork",workTime);
    localStorage.setItem("timeBreak",breakTime);
    workInput.disabled = true;
    breakInput.disabled = true;
    document.getElementById("statut").textContent = "Work";
    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "unset";
    displayTime();
    setInterval(decreaseTime, 1000);
}

//Used to decrease the time from the chrono

function decreaseTime() {
    if (seconds > 0) {
        seconds = seconds - 1;
    } else {
        if (minuts - 1 == -1) {
            if (workBoolean) {
                document.getElementById("statut").textContent = "Break";
                workBoolean = false;
                minuts = breakTime;
                seconds = 0;
            } else {
                document.getElementById("statut").textContent = "Work";
                workBoolean = true;
                minuts = workTime;
                seconds = 0;
            }
        } else {
            minuts = minuts - 1;
            seconds = 59;
        }
    }
    displayTime();
}

//reload the windows

function reset() {
    location.reload();
}