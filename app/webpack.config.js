module.exports = {
	entry: [
	'./js/project/task.js',
	'./js/project/addTask.js',
	'./js/project/taskCounter.js',
	'./js/project/taskHandler.js',
	'./js/project/removeTask.js'],

	output: {
	path: __dirname + "/js/compiled",
	filename: 'compiled.js'
	}
};