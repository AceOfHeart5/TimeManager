const speed = 1000;
const display = document.getElementById('time-display');
const buttonStart = document.getElementById('btn-start');
const buttonStop = document.getElementById('btn-stop');

let countingDown = false;

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
    let result = '';
    result += time.current.min.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
    });
    result += ":";
    result += time.current.sec.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
    });
    display.innerHTML = result;
}

const decreaseTime = function() {
    let hitZero = false;

    time.current.sec -= 1;

    if (time.current.sec < 0) {
        time.current.min -= 1
        time.current.sec = 59;
    }

    if (time.current.min < 0) {
        time.current.min = 0;
        time.current.sec = 0;
        hitZero = true;
    }

    return hitZero;
}

const tick = function () {
    if (!countingDown) return;
    let done = decreaseTime();
    if (done) {
        countingDown = false;
    } else {
        setTimeout(tick, speed);
    }
    updateDisplay();
}

buttonStart.onclick = function() {
    console.log(countingDown);
    if (countingDown === true) {
        buttonStart.innerHTML = 'start';
        countingDown = false;
    } else {
        buttonStart.innerHTML = 'pause';
        countingDown = true;
        tick();
    }
}

buttonStop.onclick = function() {
    countingDown = false;
    time.current.min = time.set.min;
    time.current.sec = time.set.sec;
    updateDisplay();
};
