var counter = class {
	constructor(number){
		this.number = number;
	}

	increase(){
		this.number++;
	}

	decrease(){
		this.number--;
	}
};

export var TaskCounter = new counter(0);