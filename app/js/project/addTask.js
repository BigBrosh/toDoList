import {Task} from './task';
import {TaskHandler} from './taskHandler';
import {TaskCounter} from './taskCounter';

var addButton = document.getElementById('add_task'),
	taskName = document.getElementById('task_name'),
	taskDate = document.getElementById('task_date'),
	taskDescription = document.getElementById('task_description');


addButton.onclick = function() {
	TaskCounter.increase();
	var newTask = new Task(TaskCounter.number, taskName.value, taskDate.value, taskDescription.value);
	console.log(newTask);
	TaskHandler.add(newTask);
	console.log(TaskHandler.array[0].name);
};