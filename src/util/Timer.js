class Timer {
    /*
    Since this is to be used with react components, we're going to pass in a time value, and a
    settter for this value. The timer object will call this setter to change the time data. We
    setup the timer like this so that the react component can listen for timer changes with 
    hooks.
    */
    constructor(ts) {
        /*
        The timer works through use of the setInterval function. We track the active interval
        with this variable.
        */
        let timeSetter = ts;
        let intervalID = null;
        let timePrevious = 0;
    }

    start(frequency = 1000) {
        this.intervalID = setInterval(() => {
            const t = new Date().getTime();
            this.timeSetter({
                timePassed: t - this.timePrevious,
                timeStart: this.timeStart
            });
            timePrevious = t;
        }, frequency);
    }

    stop() {
        clearInterval(this.intervalID);
        this.intervalID = null;
    }
}