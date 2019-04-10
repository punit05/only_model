const mongoose = require('mongoose');
const { Schema } = mongoose;



const spaServicePeopleSchema = new Schema({
    spaServicePeopleEmail:{
        type:String,
        required:true,
        unique:true
    },
    spaServicePeopleFirstName:{
        type:String,
        required:true
    },
    spaServicePeopleLastName:{
        type:String,
        required:true
    },
    spaServicePeoplePhoneNo:{
        type:String,
        default:null
    },
    spaServicePeopleAddress:{
        type: Schema.Types.ObjectId, 
        ref: 'Address' 
    },
    spaServicePeopleCode:{
        type:String,
        required:true
    },
    spaServicePeopleJob:{
        type:String,
        required:true,
        default:null
    },
    spaServicePeopleISACTIVE:{
        type:Boolean,
        default:false
    },
    spaServicePeopleWorkingHours:{
        type:Date,
        default:Date.now
    }


});
//creating the collection users
module.exports = mongoose.model("SpaServicePeople", spaServicePeopleSchema);