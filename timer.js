const speed = 1000;
const display = document.getElementById('time-display');
const buttonStart = document.getElementById('btn-start');

const time = {
    current: {
        min: 0,
        sec: 0
    },
    set: {
        min: 2,
        sec: 0
    }
}

const updateDisplay = function() {
    display.innerHTML = `${time.current.min}:${time.current.sec}`;
}

const decreaseTime = function() {
    time.current.sec -= 1;

    if (time.current.sec < 0) {
        time.current.min -= 1
        time.current.sec = 59;
    }

    if (time.current.min < 0) {
        time.current.min = 0;
        time.current.sec = 0;
    }
}

const tick = function () {
    decreaseTime();
    if (!(time.current.min === 0 && time.current.sec === 0)) {
        setTimeout(tick, speed);
    }
    updateDisplay();
}

const timerStart = function() {
    time.current.min = time.set.min;
    time.current.sec = time.set.sec;
    tick();
}

buttonStart.onclick = timerStart;
console.log(buttonStart);