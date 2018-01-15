export var Task = class {
	constructor(id, name, date, description) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.description = description;
	}

	increaseId() {
		this.id++;
	}

	decreaseId() {
		this.id++;
	}
}