// arrobj = [];
// function myFunction() {
    

// nameChecked();
// rollChecked();
// regChecked();
// clgChecked();
// addChecked();
// cityChecked();
// dataStore();
    
// }




// function nameChecked(){
//     y = document.getElementById("name").value;
//    if ( y.length > 0 && y[0]!=' ') {
//         // alert("name ok");
//     } else {
//         alert("name not valid");
//     }
// }


// function rollChecked(){
//      z = document.getElementById("roll").value;
//    if ( z.length == 5) {
//         // alert("roll ok");
//     } else {
//         alert("roll not valid");
//     }
// }


// function regChecked(){
//     // Get the value of the input field with id="numb"
//    x = document.getElementById("reg").value;
// // alert(x.length);
//     // If x is Not a Number or less than one or greater than 10
//     if ( x.length == 10) {
//         // alert("reg ok");
//     } else {
//         alert("reg not valid");
//     }   
// }




// function clgChecked(){
//     xc = document.getElementById("clg").value;
//     if ( xc.length > 0 && xc[0] !=' ') {
//         // alert("clg ok");
//     } else {
//         alert("clg not valid");
//     }   
// }

// function addChecked(){
//    xa = document.getElementById("add").value;
//     if ( xa.length > 0 && xa[0] != ' ') {
//         // alert("add ok");
//     } else {
//         alert("add not valid");
//     }   
// }

// function cityChecked(){
//     xb = document.getElementById("city").value;
//     if ( xb.length > 0 && xb[0] != ' ') {
//         // alert("city ok");
//     } else {
//         alert("city not valid");
//     }   
// }

// function checked(){

//     var selectBox = document.getElementById("country");
//     document.getElementById("country").options[0].disabled = true;
// var selectedValue = selectBox.options[selectBox.selectedIndex].value;
// // alert(selectedValue);
//         if (selectedValue =="India") {
//             // alert("kiran");
//             var select = document.getElementById("state1");
//          for(i=0;i<select.options.length;i++)
//             {
//             select.options[i]=null;
//         }

//             select.options[0]= new Option("Assam");
//             select.options[1]= new Option("Bihar");
//             select.options[2]= new Option("West Bengal");
//             select.options[3]= new Option("Odisha");
//             select.options[4]= new Option("Uttar Pradesh");

//             // alert("kiran");
//         }

//         if (selectedValue =="Nepal") {
//             // alert("kiran");
//             var select = document.getElementById("state1");
//             for(i=0;i<select.options.length;i++)
//             {
//             select.options[i]=null;
//         }
        
//             select.options[0]= new Option("Province No. 1");
//             select.options[1]= new Option("Province No. 2");
//             select.options[2]= new Option("Province No. 3");
//             select.options[3]= new Option("Province No. 4");
            

//             // alert("kiran");
//         }
//         if (selectedValue =="Bhutan") {
//             // alert("kiran");

//             var select = document.getElementById("state1");
            
//             for(i=0;i<select.options.length;i++)
//             {
//             select.options[i]=null;
//         }
//             select.options[0]= new Option("Bumthang");
//             select.options[1]= new Option("Chhukha");
//             // select.options[2]= new Option("Chirang");
//             // alert("kiran");
//         }

        
//     }

//     function dataStore()
//     {
//         if(y.length > 0 && y[0]!=' ' && z.length == 5 && x.length == 10 && xc.length > 0 && xc[0] !=' ' && xa.length > 0 && xa[0] != ' ' && xb.length > 0 && xb[0] != ' ')
//         {
//  alldata = {name:document.getElementById("name").value,roll:document.getElementById("roll").value,reg:document.getElementById("reg").value,clg:document.getElementById("clg").value,address:document.getElementById("add").value, city:document.getElementById("city").value,state:document.getElementById("state1").value,country:document.getElementById("country").value};
//  alert(alldata.name+","+alldata.roll+","+alldata.reg+","+alldata.clg+","+alldata.address+","+alldata.city+","+alldata.state+","+alldata.country);
//     arrobj.push(alldata);
//     alert(arrobj[0].name);
//     jsonobj = JSON.stringify(arrobj);
//     localStorage.setItem("localData", jsonobj);
//     alert(localStorage.getItem('localData'));
    
//     }
// reset();
//     }

// function reset()
// {
// document.getElementById("name").value="";
// document.getElementById("roll").value="";
// document.getElementById("reg").value="";
// document.getElementById("clg").value="";
// document.getElementById("add").value="";
// document.getElementById("city").value="";
// document.getElementById("country").value="";
// document.getElementById("state1").value="";


// }









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




