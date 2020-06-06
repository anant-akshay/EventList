var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
	task:String,
	date:String
}); 
module.exports = mongoose.model("Task",taskSchema);