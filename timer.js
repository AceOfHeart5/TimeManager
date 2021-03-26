const display = document.getElementById('time-display');

// time is stored in milliseconds
const time = {
    current: 0,
    target: 0,
    countDown: false,
    alarm: new Audio('./media/Powerup26.wav')
}

const tabText = document.getElementById('tab-text');

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
    tabText.innerHTML = `${min}:${sec} Time Manager`;
}

const timeReset = function(newTime = 25) {
    time.current = newTime * 60 * 1000;
    time.target = new Date().getTime() + time.current;
    displayUpdate();
}

timeReset();

time.alarm.volume = 0.2;

const timeUpdate = function() {
    const check = new Date().getTime();
    time.current = time.target - check;
    if (time.current < 0) {
        time.current = 0;
        time.countDown = false;
        time.alarm.play();
    }
}

setInterval(function() {
    if (time.countDown) {
        timeUpdate();
        displayUpdate();
    }
}, 100);

const buttonStart = document.getElementById('btn-start');

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
