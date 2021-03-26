const time = {
    current: {
        min: 0,
        sec: 0,
        ten: 0
    },
    set: {
        min: 25
    },
    counting: false
}

time.current.min = time.set.min;

const decreaseTime = function() {
    let hitZero = false;

    time.current.ten -= 1;

    if (time.current.ten < 0) {
        time.current.sec -= 1;
        time.current.ten = 9;
    }

    if (time.current.sec < 0) {
        time.current.min -= 1
        time.current.sec = 59;
    }

    if (time.current.min < 0) {
        time.current.min = 0;
        time.current.sec = 0;
        time.current.ten = 0;
        hitZero = true;
    }

    return hitZero;
}

const display = document.getElementById('time-display');

const updateDisplay = function() {
    let result = '';
    result += time.current.min.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
    });
    result += ":";
    result += time.current.sec.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
    });
    result += '.';
    result += time.current.ten;
    display.innerHTML = result;
};

updateDisplay();

setInterval(function() {
    if (time.counting) {
        decreaseTime();
        updateDisplay();
    }
}, 100);

const timerStart = function() {
    time.counting = true;
    buttonStart.innerHTML = 'pause';
}

const timerPause = function() {
    time.counting = false;
    buttonStart.innerHTML = 'start';
}

const buttonStart = document.getElementById('btn-start');

buttonStart.onclick = function() {
    if (time.counting) {
        timerPause();
    } else {
        timerStart();
    }
};

const buttonReset = document.getElementById('btn-reset');

buttonReset.onclick = function() {
    timerPause();
    time.current.min = time.set.min;
    time.current.sec = 0;
    time.current.ten = 0;
    updateDisplay();
}