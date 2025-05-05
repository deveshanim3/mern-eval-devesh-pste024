const jwt=require('jsonwebtoken');
const tokenSecret = process.env.TOKEN_SECRET;

module.exports=(req,res,next)=>{
    const token=req.headers["x-access-token"];
    if(!token){
        return res.status(403).json({success:false,message:"No valid token found"});
    }
    try{
        const decode=jwt.verify(token,tokenSecret);
        
        req.userId=decode.userId;
        next();
    }
    catch(error){
        return res.status(401).json({success:false,message:"No valid token"});
    }
}