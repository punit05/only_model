const mongoose = require('mongoose');
const { Schema } = mongoose;



const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        default:null
    },
    createdOn:{
        type:Date,
        default:Date.now
    }


});
//creating the collection users
module.exports = mongoose.model("User", userSchema);