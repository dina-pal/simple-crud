const mongoose = require('mongoose');
const {isEmail} = require('validator')
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: [true, 'username must be unique'],
        minlength: [3, 'min character 3 is required']
    },
    email:{
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email must be unique'],
        validate: [isEmail, 'Enter Valid Email']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength:[5, 'min character 5 is required']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);