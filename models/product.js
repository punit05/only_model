const mongoose = require('mongoose');
const { Schema } = mongoose;



const productSchema = new Schema({
    
    productName:{
        type:String,
        required:true
    },
    productType:{
        type:String,
        required:true
    },
    productBrand:{
        type:String,
        default:null
    },
    productDescription:{
        type:String,
        required:true,
        default:null
    }


});
//creating the collection users
module.exports = mongoose.model("Product", productSchema);