'use strict';

{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const rap = document.getElementById('rap');
    const reset = document.getElementById('reset');
    const describeRap = document.getElementById('describeRap');

    let startTime = 0;
    let passedTime = 0;
    let nowTime = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;
    let milliSecond = 0;
    let intervalID;
    let timerIsStopped = true;
    

    
    function measureTime (){
        nowTime = new Date() - startTime;
        timer.textContent = changeToTime(nowTime + passedTime);
    };
    
    function changeToTime (time){
        hour = Math.floor(time / 3600000);
        hour = ('0' + hour).slice(-2);
        minute = Math.floor(time / 60000);
        minute = ('0' + minute).slice(-2);
        second = Math.floor((time % 60000) / 1000);
        second = ('0' + second).slice(-2);
        milliSecond = Math.floor((time % 1000) /10);
        milliSecond = ('0' + milliSecond).slice(-2);
        
        return hour + ':' + minute + ':' + second + ':' + milliSecond;
    };
    
    function startButton (){
        if (timerIsStopped){
            startTime = new Date();
            intervalID = setInterval(measureTime,10);
            timerIsStopped = false;
        }
    };
    
    function stopButton (){
        passedTime = nowTime + passedTime;
        nowTime = 0;
        clearInterval(intervalID);
        timerIsStopped = true;
    };

    function rapButton (){
        let newElement = document.createElement('p');
        if (timerIsStopped){
            newElement.textContent = changeToTime(passedTime);
        }else{
            newElement.textContent = changeToTime(nowTime + passedTime);
        }
        describeRap.appendChild(newElement);
    };

    function resetButton (){
        timer.textContent = '00:00:00:00';
        passedTime = 0;
        nowTime = 0;
        passedTime = 0;
        clearInterval(intervalID);
        timerIsStopped = true;
        while(describeRap.firstChild){
            describeRap.removeChild(describeRap.firstChild);
        }
    };

    start.addEventListener('click',startButton);
    stop.addEventListener('click',stopButton);
    rap.addEventListener('click',rapButton);
    reset.addEventListener('click',resetButton);
    
}


