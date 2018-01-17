import {TaskHandler} from './taskHandler';
import {TaskCounter} from './taskCounter';

var output = document.getElementById('output');

output.onclick = function(event) {
	var removeButton = event.target;

	if (removeButton.innerHTML != 'remove')
		return;

	// console.log(removeButton.parentNode.parentNode.id);
	for (var i=0; i<TaskHandler.array.length; i++) {
		if (removeButton.parentNode.parentNode.id == TaskHandler.array[i].id) {
			TaskHandler.array.splice(i, 1);
		}
	}

	var elem = output.children[i];
	elem.remove();
}