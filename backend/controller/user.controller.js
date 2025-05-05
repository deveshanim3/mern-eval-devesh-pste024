let {validationResult}=require('express-validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const userModel=require('../database/models/userModel')

let signIn=async(req,res)=>{
    let errors=validationResult(req)
    let body=req.body
    if(errors && errors.length){
        res.status(400).json({success:false,message:errors[0].message})
    }
    let user=await userModel.findOne({email:body.email})
    if(!user){
        return res.status(400).json({success:false,message:"user not found"})
    }
    const isMatch= await bcrypt.compare(body.password,user.password)
    if(!isMatch){
        return res.status(400).json({success:false,message:"password not correct"})
    }
    const payload={
        userId:user._id,
        name:user.name
    }
    const tokenSecret=process.env.TOKEN_SECRET
    jwt.sign(payload,tokenSecret,{
        expiresIn:3600
    },(err,token)=>{
        if(err){
            res.status(400).json({success:false,message:"no token found"})
        }
        res.status(200).json({success:true,message:"token",token})
    })
    // return res.status(200).json({success:true,message:"Logged In!",token})
}

let signUp=async(req,res)=>{
    let errors=validationResult(req)
    let body=req.body
    if(errors && errors.length){
        res.status(400).json({success:false,message:errors[0].message})
    }
    let existingUser=await userModel.findOne({email:body.email})
    if(existingUser){
        res.status(400).json({success:false,message:"user already exists"})
    }
    const salt=await bcrypt.genSalt(11)

    let newUser=new userModel({
        name:body.name,
        email:body.email,
        password:await bcrypt.hash(body.password,salt),
    })
    await userModel.insertOne(newUser)
    res.status(200).json({success:true,message:"user registered successfully"})
}

module.exports={
    signIn,signUp}