const mongoose = require('mongoose');
const { Schema } = mongoose;

const offerCategorySchema=new Schema({
    offerName:
    {
        type:String,
        required:true,
        default:null
    },
    offerDuration:
    {
        type:Date
    }


})


const spaSchema = new Schema({
   spaType: { 
       type: String, 
       required: true,
       unique:true 
    },
   spaName:{ 
       type: String, 
       required: true 
    },
   spaImage: { 
       type: String,
       default:null
    },
   spaLocation: { 
       type: String,
       required: true,
       unique:true 
    },
   spaPrice: { 
     type: Number,
     required: true 
    },
   spaRating: { 
    type: Number, 
    required: true 
   },
   spaReview:[
       {
           type:String
       }
   ],
   spaAddress:{
    type: Schema.Types.ObjectId, 
    ref: 'Address' 
   },
   spaOffers:{
       type:[offerCategorySchema]
   },
   spaClient:{
       type:Schema.Types.ObjectId,
       ref:'User'
   },
   spaIsSpaOpen:{
       type:Boolean,
       default:true
   },
   spaClosingDate:{
       type:Date,
       default:Date.now
   },
   spaClosingTime:{
    type:Date,
    default:Date.now
    },
    spaOpeningDate:{
        type:Date,
        default:Date.now
    },
    spaOpeningTime:{
        type:Date,
        default:Date.now
    },
    spaPolicy:{
        type:String
    },
    spaMemberShip:{
        type:String,
        enum: ['Silver','Gold','Platinum'],
        default:'Silver'
    }
   

});
//creating the collection users
module.exports = mongoose.model("Spa", spaSchema);