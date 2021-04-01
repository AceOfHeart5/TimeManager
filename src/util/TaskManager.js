export default class TaskManager {
    constructor() {
        this.taskList = [];
        this.currentTask = -1; // index of 'active' task
    }

    addTask(taskName) {
        this.taskList.push({
            name: taskName,
            time: 0 // time spent on this task
        });
    }

    deleteTask(index) {
        this.taskList.splice(index, 1);
    }

    setTask(index) {
        if (index < 0 || index >= this.taskList.length) return;
        this.currentTask = index;
    }

    setTime(time, taskIndex =  this.currentTask) {
        this.taskList[taskIndex].time = time;
    }

    addTime(time, taskIndex = this.currentTask) {
        this.taskList[taskIndex].time += time;
    }
}
