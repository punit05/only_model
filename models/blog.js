const mongoose = require('mongoose');
const { Schema } = mongoose;


var BlogSchema = new Schema({
    
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String
    },
    photo: {
        type: String,
        default: null
    },
    createdBy: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    updatedOn: {
        type: Date
    }
})

//creating the collection users
module.exports = mongoose.model("Blog", BlogSchema);