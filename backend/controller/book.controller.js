const mongoose=require('mongoose');
const bookModel=require('../database/models/bookModel');
const userModel = require('../database/models/userModel');

const getBook=async(req,res)=>{
    const book=await bookModel.find()
    res.status(200).json({book})
}
const getBookByID=async(req,res)=>{
    const bookId=req.params.id
    const book=await bookModel.findById(bookId)
    res.status(200).json({book})
}
const createBook=async(req,res)=>{
    let body=req.body
    console.log(req.body)
    let book = new bookModel({
        title:body.title,
        author:body.author,
        year:body.year,
        genre:body.genre
    });        
    await book.save()
    res.status(200).json({book})
}

const updateBook=async(req,res)=>{
    let bookId=req.params.id
    let newTitle=req.body.title;
    let newauthor=req.body.author;
    let newYear=req.body.year;
    let newGenre=req.body.genre;
    let book=await bookModel.findById(bookId)

    if(newTitle && newTitle!=""){
        book.title=newTitle
    }
    if(newauthor && newauthor!=""){
        book.author=newauthor
    }
    if(newYear && newYear>1900){
        book.year=newYear
    }
    if(newGenre && newGenre!=""){
        book.genre=newGenre
    }
    const updatedBook=await book.save()
    res.status(200).json({updatedBook})
}
const deleteBook=async(req,res)=>{
    let bookId=req.params.id
    await bookModel.findByIdAndDelete(bookId)
    res.status(200).json({success:true,"message":"book deleted"})
}

module.exports={getBook,getBookByID,createBook,updateBook,deleteBook}









