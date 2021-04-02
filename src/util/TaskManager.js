export default class TaskManager {
    constructor() {
        this.taskList = [];
        this.currentTask = -1; // index of 'active' task
    }

    addTask(taskName) {
        if (taskName === '') return;
        let canAdd = true;
        this.taskList.forEach(task => {
            if (task.name === taskName) {
                canAdd = false;
            }
        });
        if (!canAdd) return;
        this.taskList.push({
            name: taskName,
            time: 0 // time spent on this task
        });
    }

    deleteTask(index) {
        this.taskList.splice(index, 1);
        if (this.currentTask === index) {
            this.currentTask = -1;
        }
    }

    setTask(index) {
        if (index < 0 || index >= this.taskList.length) return;
        if (this.currentTask === index) {
            this.deselectTask();
            return;
        }
        this.currentTask = index;
    }

    deselectTask() {
        this.currentTask = -1;
    }

    setTime(time, taskIndex =  this.currentTask) {
        this.taskList[taskIndex].time = time;
    }

    addTime(time, taskIndex = this.currentTask) {
        if (this.currentTask < 0) return;
        this.taskList[taskIndex].time += time;
    }
}
