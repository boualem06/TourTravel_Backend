const  mongoose  = require('mongoose') ;
const Schema=mongoose.Schema  ;
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'please add a name']
    },
    email:{
        type:String,
        required:[true,'please add an email']
    },
    password:{
        type:String,
        required:[true,'please add a password']
    },
    admin:
    {
        type:Boolean,
        required:[true,'please specify if the user is Admin or no ']
    }
    
},{timestamps:true})

const User=mongoose.model('User',userSchema) ;
module.exports=User ;
