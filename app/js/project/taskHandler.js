var taskArray = [];

var handler = class {
	constructor(array) {
		this.array = array;
	}

	add(task) {
		this.array.push(task);
	}
};

export var TaskHandler = new handler(taskArray);