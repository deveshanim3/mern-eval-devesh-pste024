const express=require('express')
const {signIn,signUp}=require('../controller/user.controller')
const jwt=require('jsonwebtoken')
const auth=require("../middleware/auth")
let userRouter=express.Router()
userRouter.use(express.json())

userRouter.post('/signin',auth,signIn)
userRouter.post('/signup',signUp)

module.exports=userRouter