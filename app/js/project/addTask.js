import {Task} from './task';
import {TaskHandler} from './taskHandler';

var addButton = document.getElementById('add_task'),
	taskName = document.getElementById('task_name'),
	taskDate = document.getElementById('task_date'),
	taskDescription = document.getElementById('task_description'),
	task_id = 0;


addButton.onclick = function() {
	task_id++;
	var newTask = new Task(task_id, taskName.value, taskDate.value, taskDescription.value);
	console.log(newTask);
	TaskHandler.add(newTask);
	console.log(TaskHandler.array);
};