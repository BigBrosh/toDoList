// import {Task} from './task';

var Task = class {
	constructor(name, date, description) {
		this.name = name;
		this.date = date;
		this.description = description;
	}
}

var addButton = document.getElementById('add_task'),
	taskName = document.getElementById('task_name').value,
	taskDate = document.getElementById('task_date').value,
	taskDescription = document.getElementById('task_description').value,
	newTask = new Task(taskName, taskDate, taskDescription);


addButton.onclick = function() {
	newTask.name = taskName;
	newTask.date = taskDate;
	newTask.description = taskDescription;
	console.log(newTask);
};