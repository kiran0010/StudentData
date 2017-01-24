$('#button1').click(function(e){
  e.preventDefault();
  var student = {
    name : {
      fname : $('#fname').val(),
      lname : $('#lname').val(),
    },
    reg : $('#reg').val(),
    clgName : $('#clg').val(),
    age : $('#age').val(),
    address : {
      city : $('#city').val(),
      country : $('#country').val(),
      state : $('#state1').val(),
    },
    roll : $('#roll').val(),
  };
 //console.log(student);
  $.ajax({
    url : '/student/add',
    type: 'POST',
    data : student,
    success : function(result){       
      console.log(result);
    }
  });   
});

$(".btn-show").click(function(er){
  er.preventDefault();
  window.location.href = "/student/list"
})
