const mongoose=require('mongoose');

const connnectDb=async()=>{
    try{
        mongoose.connect('mongodb+srv://kishoore004:9876@watchloft.i5icx.mongodb.net/')
        console.log("connected sucessfully")
    }catch(error){
        console.error(error.message)

    }
}

module.exports=connnectDb;



