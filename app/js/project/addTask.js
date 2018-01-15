import {Task} from './task';

var addButton = document.getElementById('add_task'),
	taskName = document.getElementById('task_name'),
	taskDate = document.getElementById('task_date'),
	taskDescription = document.getElementById('task_description'),
	task_id = 0,
	newTask = new Task(task_id, taskName, taskDate, taskDescription);


addButton.onclick = function() {
	newTask.name = taskName.value;
	newTask.date = taskDate.value;
	newTask.description = taskDescription.value;
	newTask.increaseId();
	console.log(newTask);
};