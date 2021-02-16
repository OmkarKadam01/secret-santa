const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        minlength : 3,
        required : true
    },
    email : {
            type : String,
            unique : [true , 'Email alraedy used'],
            required : true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Invalid Email Id')
                }
            }
    } ,
    password : {
            type : String,
            required : true
        },
    phone :{
        type : Number,
        min : 10,
        required : true,
        unique : [true , 'Number is alraedy used']
    },
    address : {
        type : String,
        required : true
    }   
})

// const User = new mongoose.Model('User',userSchema);

// module.exports = User
module.exports =  mongoose.model('User', userSchema)