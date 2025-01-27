const mongoose=require('mongoose')



const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlenght:[3,"Minimum character should be 3"]

    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    imgUrl:{
        type:String,
        required:true,
    }

});

module.exports = mongoose.model('Product', ProductSchema);