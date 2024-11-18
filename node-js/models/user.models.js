const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

name : {
    type: 'string',
    required: [true,  "Please Enter user name" ]
},
email : {
    type: 'string',
    required: true
},
password : {
    type: 'string',
    required: true
},
role : {
    type: 'string',
    required: true
},

},
{timestamps: true}

)

const user = mongoose.model('USER', userSchema);

module.exports = user;