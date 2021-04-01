import alarm from '../media/alarm.wav';

export default class Timer {
    constructor(startMins, onTickFunction) {
        this.timeRemaining = 0; // time is stored in milliseconds
        this.timePrevious = 0; // time at previous tick
        this.timePassed = 0; // time changed each tick
        this.intervalID = null;
        this.onTick = onTickFunction; // function called each tick
        this.setTime(startMins);
        this.alarm = new Audio(alarm);
    }

    setTime(mins) {
        this.timeRemaining = mins * 60 * 1000;
        this.stop();
    }

    start() {
        // the "tick" cycle
        this.timePrevious = new Date().getTime();
        this.intervalID = setInterval(() => {
            const t = new Date().getTime();
            this.timePassed = t - this.timePrevious;

            this.timePassed *= 200; // greater speed for debugging

            if (this.timePassed >= this.timeRemaining) {
                this.timePassed = this.timeRemaining;
            }
            this.timeRemaining -= this.timePassed;
            if (this.timeRemaining <= 0) {
                this.timeRemaining = 0;
                this.alarm.play();
                this.stop();
            }
            if (typeof(this.onTick) === 'function') {
                this.onTick(this.timeRemaining, this.timePassed);
            }
            this.timePrevious = t;
        }, 100);
    }

    stop() {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    getRunning() {
        return this.intervalID !== null;
    }

    startToggle() {
        if (this.timeRemaining === 0) return;

        if (this.getRunning()) {
            this.stop();
        } else {
            this.start();
        }
    }
}
