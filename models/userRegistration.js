const mongoose = require("mongoose");

const userRegistrationSchema = new mongoose.Schema({
firstName:{
    type:String,
    trim:true
},
lastName:{
    type:String,
    trim:true
},
childName:{
    type:String,
    trim:true
},
childAge:{
    type:Number,
    trim:true
},
gender:{
    type:String,
    trim:true
},
id:{
    type:String,
    trim:true
},
telNo:{
    type:String,
    trim:true
},
address:{
    type:String,
    trim:true
},
email:{
    type:String,
    unique:true,

},
country:{
    type:String,
    trim:true
},
role:{
    type:String,
    trim:true
},
dob:{
    type:Date,
    trim:true
},
userName:{
    type:String,
    trim:true
},
password:{
    type:String,
    trim:true
},


});

module.exports = mongoose.model("Application", userRegistrationSchema )