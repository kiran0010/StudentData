var express = require('express');
var router = express.Router();

var Student = require('../models/student');

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.render ("add",{ title: 'Student Data' });
});

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

router.get('/list/:reg?', function(req, res, next) {
	// var filter = {};
	// if(req.params.reg !== undefined)filter.reg = req.params.reg
  Student.find({})
   .exec(function(err,students){
   	if(err)
   	{
   	}
   		res.render('list',{
   			students: students
   		});
   	//return res.json(students);
   });
});

router.get('/edit/:studentId',function(req,res,next){

Student.findOne({_id : req.params.studentId})
	.exec(function(err,student){
		return res.render('edit',{student:student})
	});
});

router.put('/:studentId',function(req,res,next){

});

router.delete('/:studentId',function(req,res,next){

});
module.exports = router;
