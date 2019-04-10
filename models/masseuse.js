const mongoose = require('mongoose');
const { Schema } = mongoose;

const servicesSchema=new Schema({
    serviceId: {
        type: Schema.Types.ObjectId,
        ref: 'servicesCategory'
    }

})


const masseuseSchema = new Schema({
    masseuseEmail:{
        type:String,
        required:true,
        unique:true
    },
    masseuseFirstName:{
        type:String,
        required:true
    },
    masseuseLastName:{
        type:String,
        required:true
    },
    masseusePhoneNo:{
        type:String,
        default:null
    },
    masseuseAddress:{
        type: Schema.Types.ObjectId, 
        ref: 'Address' 
    },
    masseuseServices:{
        type:[
            servicesSchema
        ]
    },
    masseuseTimeSlot:[
        {
        type:Date
        }
    ]

});
//creating the collection users
module.exports = mongoose.model("Masseuse", masseuseSchema);