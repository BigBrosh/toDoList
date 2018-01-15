import {Task} from './task';
import {TaskHandler} from './taskHandler';

var addButton = document.getElementById('add_task'),
	taskName = document.getElementById('task_name'),
	taskDate = document.getElementById('task_date'),
	taskDescription = document.getElementById('task_description'),
	task_id = 0;


addButton.onclick = function() {
	var newTask = new Task(task_id, taskName.value, taskDate.value, taskDescription.value);
	newTask.increaseId();
	console.log(newTask);
	TaskHandler.add(newTask);
	console.log(TaskHandler.array);
};