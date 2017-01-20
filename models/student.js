var mongoose = require('mongoose');
var StudentSchema = new mongoose.Schema({
	name : {
                fname : String,
                lname : String
                     },
            reg : {
            	type: String,
            	unique: true,
            },
            clgName : String,
            age : Number,
            address : {
                city : String,
                country : String,
                state : String,
            },
            roll : Number,
})

module.exports = mongoose.model("Student",StudentSchema)
