const mongoose = require('mongoose');
const { Schema } = mongoose;

const servicesSchema=new Schema({
    servicesName:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("ServicesCategory",servicesSchema);