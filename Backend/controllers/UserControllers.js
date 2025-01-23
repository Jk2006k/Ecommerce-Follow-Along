const User=require('../models/UseModels');

const signup= async (req,res)=>{
    try{
        const{name,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            res.status(400).send('User Already Exits')
        }
        const newUser=new User({
            name,email,password
        })
        await newUser.save();
        res.status(200).send('New user created ')
    }catch(error){
        res.status(300).send(error.message)
    }
}
module.exports=signup;