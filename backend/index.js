const express=require('express')
const app=express()
const mongoose=require('./database/connection')
const bookRouter=require('./routes/book.router')
const userRouter=require('./routes/user.router')
require('dotenv').config()
app.use(express.json())

app.use("/book",bookRouter)
app.use("/user",userRouter)
app.use((req,res)=>{
    res.status(404).json({success:false,message:"Page not found"}).send(`
        <html><head><title>404</title></head>
        <body>
        <h1>ERROR 404 NOT FOUND
        </body>
        </html>
        `)
})
app.listen(5050,()=>{
    console.log("server started! on 5050")
})
