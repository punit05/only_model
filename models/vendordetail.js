const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema=new Schema({
    vendorProductId:{
        type: Schema.Types.ObjectId, 
        ref: 'Product' 
    }
    
})


const vendorDetailSchema = new Schema({
    vendorEmail:{
        type:String,
        required:false,
        unique:true
    },
    vendorFirstName:{
        type:String,
        required:true
    },
    vendorLastName:{
        type:String,
        required:true
    },
    vendorPhoneNo:{
        type:String,
        default:null
    },
    vendorProductDetails:[
       productSchema
    ]

});
//creating the collection users
module.exports = mongoose.model("VendorDetail", vendorDetailSchema);