const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

name : {
    type: 'string',
    required: [true,  "Please Enter user name" ]
},
email : {
    type: 'string',
    required: true,
    unique: true, 
    match: [ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address' ],
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