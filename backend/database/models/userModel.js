const mongoose=require('mongoose')
let userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:
    {
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
const userModel=mongoose.model("Users",userSchema)
module.exports=userModel