import Timer from './Timer';
import TaskManager from './TaskManager';

/*
This application object will keep track of everything the app needs. The `getState()` function will
return an object with all the functions and data the react components need. The app componenent creates
an instance of this class, as well as a state with hook for storing the application data. That 
setState() function is passed into this object, and used to update the state of the react components. 
*/

export default class Application {
    constructor() {
        this.stateID = 0;
        this.stateSetter = null;
        this.timer = new Timer(25, () => this.tick());
        this.tasks = new TaskManager();
        this.tasks.addTask('make cookies');
        this.tasks.addTask('play video games');
        this.tasks.addTask('watch netflix');
    }

    setStateSetter(v) {
        this.stateSetter = v;
    }

    updateState() {
        if (this.stateSetter === null) {
            console.log('Application error: stateSetter not defined!');
            return
        }

        this.stateID += 1;
        this.stateSetter(this.stateID);
    }

    // APPLICATION FUNCTIONS
    /*
    These functions are used by components to change the state of the app. All of them call the
    updateState() function at the end. Calling updateState will trigger the setState function
    given to the application object, which will in turn update the react components. Many of
    these will be wrapper functions for objects the app uses.
    */

    // TIMER
    setTime(mins) {
        this.timer.setTime(mins);
        this.updateState();
    }

    tick() {
        this.tasks.addTime(this.timer.timePassed);
        this.updateState();
    }

    startTimer() {
        this.timer.startToggle();
        this.updateState();
    }

    // TASK MANAGER
    addTask(name) {
        this.tasks.addTask(name);
    }

    deleteTask(index) {
        this.tasks.deleteTask(index);
        this.updateState();
    }
}
