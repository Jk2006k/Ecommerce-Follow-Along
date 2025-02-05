const mongoose=require('mongoose');

const connnectDb=async()=>{
    try{
        mongoose.connect('mongodb+srv://kishoore004:Siva%405@jk.itech.mongodb.net/')
        console.log("connected sucessfully")
    }catch(error){
        console.error(error.message)

    }
}

module.exports=connnectDb;



