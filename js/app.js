let stopInterval;
let seconds = 59;
let minuts = 24;
let breakTime = 5;
let workTime = 25;
workBoolean = true;
window.onload = (event) => {
    document.getElementById("timer").textContent="25:00";
};

function displayTime(){
    if(seconds < 10){
        if(minuts < 10){  
            document.getElementById("timer").textContent=`0${minuts}:0${seconds}`;
        }
    }else if(minuts<10){
        document.getElementById("timer").textContent=`0${minuts}:${seconds}`;
    }else{
         document.getElementById("timer").textContent=`${minuts}:${seconds}`;
    }
}

function startTimer(){
    displayTime();
    setInterval(decreaseTime,500);
}


function decreaseTime(){
    if(seconds > 0){
        seconds = seconds-1;
        displayTime();
    }else{
        if(minuts-1 == -1){
            if(workBoolean){
                workBoolean = false;
                minuts = breakTime;
                seconds = 0;
                displayTime();
            }else{
                workBoolean = true;
                minuts = workTime;
                seconds = 0;
                displayTime();
            }
        }else{
            minuts = minuts-1;
            seconds = 59;
            displayTime();
        }
    }
}

function reset(){
    location.reload();
}