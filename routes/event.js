var express = require("express");
var router = express.Router();
var Task = require("../models/task");

router.get("/",function(req,res){
	Task.find({},function(err,allTasks){
		if(err){
			console.log("error");
		}else{
			res.render("index",{tasks:allTasks});
		}
	});
});

router.get("/new",function(req,res){
	res.render("new");
});

router.delete("/:id",function(req,res){
	Task.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/events");
		}else{
			res.redirect("/events");
		}	
	});
});
router.post("/",function(req,res){
	var task = req.body.task;
	var date = req.body.date;
	var newTask = {task:task,date:date};
	Task.create(newTask,function(err,newlyCreated){
		if(err){
			console.log("Error");
		}else{
			res.redirect("/events");
		}
	});
});


module.exports = router;
