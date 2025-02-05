const Product=require('../models/FormModels')

const createProduct=async(req,res)=>{
    try{
        const {name,category,description,price,stock,imgUrl}=req.body;
        const newproduct= new Product({name,category,description,price,stock, imgUrl});
        await newproduct.save();
        res.status(200).send('New Product added successfully')
    }catch(error){
        res.status(201).send(error.message)
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getproductbyid=async(req,res)=>{
    try{
        const id=req.params.id;
        const products=await Product.findById()
        if(products){
            res.status(200).json({message:'data found',data:products})
        }
        res.status(500).json({message:'Product not found'});

    }catch(error){
        res.status(500).json({message:error.message});

    }
}

const updateproduct=async(req,res)=>{
    try{
        const products=await Product.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({message:'Product updated successfully'});
    }catch(error){
        res.status(500).json({message:error.message});
    }


}

const deleteproduct=async(req,res)=>{
    try{
        const products=await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Product deleted successfully'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports={createProduct,getproductbyid,updateproduct,getAllProducts, deleteproduct};
