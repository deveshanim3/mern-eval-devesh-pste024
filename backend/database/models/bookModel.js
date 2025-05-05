const mongoose=require('mongoose')

let bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        require:true
    },
    genre:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const bookModel=mongoose.model("books",bookSchema)
module.exports=bookModel