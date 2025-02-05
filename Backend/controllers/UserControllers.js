const User=require('../models/UseModels');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const signUp= async (req,res)=>{
    try{

        const{name,email,password}=req.body;
        const user=await User.findOne({email});
        
        if(user){
            res.status(400).send('User Already Exits')
        }

        const hashedpassword=await bcrypt.hash(password,10)
        const newUser=new User({
            name,email,password:hashedpassword,img:req.file.filename
        })
        
        await newUser.save();
        
        res.status(200).send('New user created ')
    }catch(error){
        console.log("error in signup:",error)    
        res.status(500).send(error.message);
    }
}

const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            res.status(404).send("User doesn't exits")
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(500).send("Invalid User")
        }
        const token=await jwt.sign({_id:user._id,email:user.email},"secret",{expiresIn:"1h"})
        return res.status(200).json({message:"sucessfully logged in ",token})
        

    }catch(error){
        console.log("error in login:",error)
        return res.status(500).send("Invalid User")
    }
}






module.exports={login,signUp};



