const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({

name : {
    type: String,
    required: true
},
color : {
    type: String,
    required: true,
},
icon : {
    type: String,
  
},
image : {
    type: String,
},

},
{timestamps: true}

)

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;