let stopInterval;
let seconds = 0;
let minuts = 25;
let breakTime = 5;
let workTime = 25;
workBoolean = true;
window.onload = (event) => {
    document.getElementById("timer").textContent="25:00";
};

const workInput= document.querySelector("#rangeWork"); 
const breakInput = document.querySelector("#rangeBreak");

breakInput.addEventListener("input", (event) => {
    var breakInputValue = event.target.value;
    if(breakInputValue <10){
        document.getElementById("textBreakInput").textContent =`0${breakInputValue}`;
    }else{
        document.getElementById("textBreakInput").textContent = breakInputValue;
    }
    breakTime= breakInputValue;
});

workInput.addEventListener("input", (event) => {
    var workInputValue = event.target.value;
    if(workInputValue <10){
        document.getElementById("textWorkInput").textContent =`0${workInputValue}`;
    }else{
        document.getElementById("textWorkInput").textContent = workInputValue;
    }
    workTime = workInputValue;
    minuts = workInputValue;
    displayTime();
});

function displayTime(){
    if(seconds < 10){
        if(minuts < 10){  
            document.getElementById("timer").textContent=`0${minuts}:0${seconds}`;
        }else{
            document.getElementById("timer").textContent=`${minuts}:0${seconds}`;
        }
    }else if(minuts<10){
        document.getElementById("timer").textContent=`0${minuts}:${seconds}`;
    }else{
         document.getElementById("timer").textContent=`${minuts}:${seconds}`;
    }
}

function startTimer(){
    workInput.disabled=true;
    breakInput.disabled=true;
    document.getElementById("statut").textContent="Work";
    document.getElementById("start").style.display="none";
    document.getElementById("reset").style.display="unset";
    displayTime();
    setInterval(decreaseTime,1000);
}


function decreaseTime(){
    if(seconds > 0){
        seconds = seconds-1;
    }else{
        if(minuts-1 == -1){
            if(workBoolean){
                document.getElementById("statut").textContent="Break";
                workBoolean = false;
                minuts = breakTime;
                seconds = 0;
            }else{
                document.getElementById("statut").textContent="Work";
                workBoolean = true;
                minuts = workTime;
                seconds = 0;
            }
        }else{
            minuts = minuts-1;
            seconds = 59;
        }
    }
    displayTime();
}

function reset(){
    location.reload();
}