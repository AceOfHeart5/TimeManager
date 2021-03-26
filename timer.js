const display = document.getElementById('time-display');
const buttonStart = document.getElementById('btn-start');

// time is stored in milliseconds
const time = {
    current: 0,
    target: 0,
    countDown: false
}

const displayUpdate = function() {
    let temp = time.current;
    const minutes = Math.floor(temp / 60 / 1000);
    temp -= minutes * 60 * 1000;
    const seconds = Math.floor(temp / 1000);
    temp -= seconds * 1000;
    const milliseconds = temp;

    const min = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2
    });
    const sec = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2
    });
    const mil = milliseconds.toLocaleString('en-US', {
        minimumIntegerDigits: 3
    });
    display.innerHTML = `${min}:${sec}.${mil}`;
}

const timeReset = function(newTime = 25) {
    time.current = newTime * 60 * 1000;
    time.target = new Date().getTime() + time.current;
    displayUpdate();
}

timeReset();

const timeUpdate = function() {
    const check = new Date().getTime();
    time.current = time.target - check;
}

setInterval(function() {
    if (time.countDown) {
        timeUpdate();
        displayUpdate();
    }
}, 100);

countDownStart = function() {
    time.countDown = true;
    buttonStart.innerHTML = 'pause';
    time.target = new Date().getTime() + time.current;
}

countDownPause = function() {
    time.countDown = false;
    buttonStart.innerHTML = 'start';
}

buttonStart.onclick = function() {
    if (time.countDown) {
        countDownPause();
    } else {
        countDownStart();
    }
}

const buttonMinutes = new Map();
buttonMinutes.set(25, document.getElementById('btn-set-25'));
buttonMinutes.set(5, document.getElementById('btn-set-5'));
buttonMinutes.set(10, document.getElementById('btn-set-10'));

buttonMinutes.forEach((button, minutes) => {
    button.onclick = function() {
        timeReset(minutes);
        countDownPause();
    }
});
