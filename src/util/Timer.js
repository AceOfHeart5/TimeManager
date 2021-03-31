export default class Timer {
    constructor() {
        this.timeSetter = null;
        this.intervalID = null;
        this.timePrevious = 0;
        this.tickID = 0;
    }

    /*
    The timer interacts with react components by changing the value of a react state with a
    setter function. That function is set here, and must be done before the timer object
    can be used correctly.
    */
    setTimeSetter(ts) {
        this.timeSetter = ts;
    }

    /*
    Once started, each interval the timer will set the time value using the timeSetter function.
    The value it's set to is an object with the time passed since the last interval, and an ID
    for that "tick". The tickID will always change each interval, which ensures that even if the
    time passed is identical to the time passed last tick, the new value will trigger component
    re-renders. 
    */
    start() {
        if (this.timeSetter === null) {
            console.log("Timer error: timeSetter not set!");
            return;
        }

        this.timePrevious = new Date().getTime();
        this.intervalID = setInterval(() => {
            const t = new Date().getTime();
            this.timeSetter({
                timePassed: t - this.timePrevious,
                id: this.tickID
            });
            this.timePrevious = t;
            this.tickID += 1;
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    getRunning() {
        if (this.intervalID === null) return false;
        return true;
    }

    startToggle() {
        if (this.getRunning()) this.stop();
        else this.start();
    }
}