const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        match:[/^[a-zA-Z0-9 ]+$/,"User Name Invalid"]
    },
    email:{
        type:String,
        required:true,
        match:[/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,"Email Is Invaid"]
    },
    password:{
        type:String,
        required:true,
        minlenght:[8,'The minimun digit sholud be 8'],
        validate:{
            validator:ValidatePasword,
            message:"Enter a strong Password"
            
        }
    }
})

function ValidatePasword(password){
    return(
        /[A-Z]/.test(password)&&
        /[a-z]/.test(password)&&
        /[0-9]/.test(password)&&
        /[!@#$%^&*]/.test(password)

    )
};

module.exports=mongoose.model("User",UserSchema);


