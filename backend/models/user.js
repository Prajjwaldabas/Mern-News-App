const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
{
   firstname:{
type:String
    },
   lastname:{
type:String
    },
    email : {
        type:String,
        required:true,

    },

    password:{
        type:String,
        required:true
    },

    saves:{
        type:Array
    },
    interest:{
        type:Array
    },
    recommendation:{
        type:Array
    }
},
{timestamps:true}

)

const User= mongoose.model('Users',UserSchema)

module.exports= User