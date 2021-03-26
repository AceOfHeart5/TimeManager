const display = document.getElementById('time-display');
const buttonStart = document.getElementById('btn-start');
const buttonReset = document.getElementById('btn-reset');

// time is stored in milliseconds
const time = {
    current: 0,
    set: 25 * 60 * 1000,
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

const timeReset = function() {
    console.log('time reset');
    time.current = time.set;
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

buttonStart.onclick = function() {
    if (time.countDown) {
        time.countDown = false;
        buttonStart.innerHTML = 'start';
    } else {
        time.countDown = true;
        buttonStart.innerHTML = 'pause';
        time.target = new Date().getTime() + time.current;
    }
}

buttonReset.onclick = timeReset;