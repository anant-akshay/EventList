var express = require("express");
var	mongoose  = require("mongoose");
var bodyParser= require("body-parser");
var app       = express();
var methodOverride = require("method-override");

var eventRoutes    = require("./routes/event");


var url = process.env.DATABASEURL || "mongodb://localhost:27017/event_list";
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
mongoose.set('useFindAndModify', false);

app.get("/",function(req,res){
	res.redirect("/events")
})

app.use("/events", eventRoutes);

var port = process.env.port || 3000;
app.listen(port,function(){
	console.log("server started")
});
