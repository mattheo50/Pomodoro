let stopInterval;
let seconds = 59;
let minuts = 24;
let breakTime = 5;
let workTime = 25;
window.onload = (event) => {
    document.getElementById("timer").textContent="25:00";
};

function displayTime(){
    document.getElementById("timer").textContent=`${minuts}:${seconds}`
}

function startTimer(){
    displayTime();
    workBoolean = true;
    stopInterval = setInterval(decreaseTime,50);
    


}


function decreaseTime(){
    if(seconds == 0 && minuts == 0){
        clearInterval(stopInterval);
    }else
    if(seconds > 0){
        seconds = seconds-1;
        displayTime();
    }else
    if(minuts>0){
        minuts = minuts-1;
        seconds = 59;
        displayTime();
    }
}

function reset(){
    location.reload();
}