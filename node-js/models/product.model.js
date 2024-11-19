const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

name : {
    type: 'string',
    required: true
},
description : {
    type: 'string',
    required: true
    
},
richDescription : {
    type: 'string',
default: "",
    
},
image : {
    type: 'string',
    default: "",
},
images : [
    {
        type: 'string',
        default: "",
    },
],
brand : {
    
    type: 'string',
    default: "",
},
price : {
    type : Number,
    default : 0
},
category : {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true  

},
countInStock : {
    type : Number,
    default : 0,
    required: true,
    min: 0,
    max: 1000  

},
rating : {
    type : Number,
    default : 0,
    min: 0,
    max: 5
},
 isFeatured : {
    type: Boolean,
    default: false,
    required: true
 },
 dateCreated : {
    type: Date,
    default: Date.now,

 }
    

},
{timestamps: true}

)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;