const display = document.getElementById('time-display');
const buttonStart = document.getElementById('btn-start');

const time = {
    current: {
        min: 0,
        sec: 0
    },
    set: {
        min: 25,
        sec: 0
    }
}

const updateDisplay = function() {
    display.innerHTML = `${time.current.min}:${time.current.sec}`;
}

const tick = function () {
    console.log("tick");
    time.current.sec -= 1;
    if (time.current.sec < 0) {
        
    }
    updateDisplay();
}

const timerStart = function() {
    time.current.min = time.set.min;
    time.current.sec = time.set.sec;
    updateDisplay();
    setTimeout(tick, 1000);
}

buttonStart.onclick = timerStart;
console.log(buttonStart);