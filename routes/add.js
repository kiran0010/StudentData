var express = require('express');
var router = express.Router();

var Student = require('../models/student');

/* GET users listing. */
 // add data by the user load the main add ui page
router.get('/add', function(req, res, next) {
  res.render ("add",{ title: 'Student Data' });
});


// save the data by click the submit button work this route 
router.post('/add',function(req,res,next){
	var data = req.body;	
	//res.json(data);
	console.log(data);
	var student = new Student(data);
	student.save(function(err,result){
		if(err)
			{
				return res.json({error:true,reason:err});
			}
		return res.json({error:false});
	}); 
});


// this route is work for show the list by showing the list ejs file
router.get('/list', function(req, res, next) {
  Student.find({})
   .exec(function(err,students){
   	if(err)
   	{
   	}
   	res.render('list',{
   			students: students
   	});
  });
});

// this route is work for edit ejs file show one student document
router.get('/edit/:studentId',function(req,res,next){
	Student.findOne({_id : req.params.studentId})
	.exec(function(err,student){
		return res.render('edit',{student:student})
	});
});


// this is update the user data by the id 
router.put('/edit/:studentId',function(req,res,next){
	var data1 = req.body;
	// console.log(data1);
	// console.log(req.params.studentId)
	Student.findByIdAndUpdate(req.params.studentId, data1, { new: true }, function (err, studnt) {
	  // if (err) return console.log(err);
	  res.json(studnt);
	});
});


// this is work foe delete data from list
router.delete('/:studentId',function(req,res,next){
	Student.remove({_id : req.params.studentId}).exec(function(err,stud){
		return res.json(stud);
	});
});


module.exports = router;
