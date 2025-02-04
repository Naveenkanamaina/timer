let timerInterval;
let remainingTime=0;

function setTimer(){
    let days=parseInt(document.getElementById("daysIn").value)||0;
    let hours=parseInt(document.getElementById("hoursIn").value)||0;
    let minutes=parseInt(document.getElementById("minsIn").value)||0;
    let seconds=parseInt(document.getElementById("secsIn").value)||0;

    remainingTime=(days *24*60*60)+(hours*60*60)+(minutes*60)+seconds;

    document.getElementById("days").innerText=String(days).padStart(2,'0');
    document.getElementById("hours").innerText=String(hours).padStart(2,'0');
    document.getElementById("mins").innerText=String(minutes).padStart(2,'0');
    document.getElementById("secs").innerText=String(seconds).padStart(2,'0');
}
function start(){
    if(remainingTime > 0 && !timerInterval){
        timerInterval=setInterval(() =>{
            remainingTime --;
            updateDisplay();
            if(remainingTime<=0){
                clearInterval(timerInterval);
                timerInterval=null;
            }
        },1000);
    }
}
function stop(){
    if(timerInterval){
        clearInterval(timerInterval);
         timerInterval=null;
    }
}
function reset(){
    stop();
    remainingTime=0;
    document.getElementById("daysIn").value=0;
    document.getElementById("hoursIn").value=0;
    document.getElementById("minsIn").value=0;
    document.getElementById("secsIn").value=0;
    updateDisplay();
}
function updateDisplay(){
    let days=Math.floor(remainingTime/(24*60*60));
    let hours=Math.floor((remainingTime%(24*60*60))/(60*60));
    let minutes=Math.floor(remainingTime%(60*60)/60);
    let seconds=remainingTime %60;

    document.getElementById("days").innerText=String(days).padStart(2,'0');
    document.getElementById("hours").innerText=String(hours).padStart(2,'0');
    document.getElementById("mins").innerText=String(minutes).padStart(2,'0');
    document.getElementById("secs").innerText=String(seconds).padStart(2,'0');
}