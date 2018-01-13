module.exports = {
	entry: [
	'./js/project/task.js',
	'./js/project/addTask.js'],

	output: {
	path: __dirname + "/js/compiled",
	filename: 'compiled.js'
	}
};