import {Task} from './task';
import {TaskHandler} from './taskHandler';
import {TaskCounter} from './taskCounter';

var addButton = document.getElementById('add_task'),
	taskName = document.getElementById('task_name'),
	taskDate = document.getElementById('task_date'),
	taskDescription = document.getElementById('task_description'),
	output = document.getElementById('output');


addButton.onclick = function() {
	TaskCounter.increase();
	var newTask = new Task(TaskCounter.number, taskName.value, taskDate.value, taskDescription.value);
	TaskHandler.add(newTask);
	// console.log(TaskHandler.array[0].name);
	

	var newRow = document.createElement('tr');
	newRow.id = TaskCounter.number;
	newRow.innerHTML = '<td>' + newTask.name + '</td>';
	newRow.innerHTML += '<td>' + newTask.date + '</td>';
	newRow.innerHTML += '<td>' + newTask.description + '</td>';
	newRow.innerHTML += '<td> <input type="checkbox"> </td>';

	output.appendChild(newRow);
	console.log('mas ' + TaskHandler.array[TaskHandler.array.length - 1].id);
	console.log('newTask ' + newTask.id);
}