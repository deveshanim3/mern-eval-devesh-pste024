const express=require('express')
const bodyParser=require('body-parser')
let bookRouter=express.Router()

const {getBook,getBookByID,createBook,updateBook,deleteBook}=require('../controller/book.controller')
bookRouter.use(bodyParser.json())

bookRouter.get('/',getBook)
bookRouter.get("/:id",getBookByID)
bookRouter.post("/",createBook)
bookRouter.put("/:id",updateBook)
bookRouter.delete("/:id",deleteBook)

module.exports=bookRouter