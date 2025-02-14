const Product = require('../models/FormModels');

const createProduct = async (req, res) => {
    try {
        console.log("Received request body:", req.body); 
        console.log("Received files:", req.files);

        const name = req.body.name?.trim();
        const category = req.body.category?.trim();
        const description = req.body['description ']?.trim() || req.body.description?.trim();
        const price = parseFloat(req.body.price); 
        const stock = parseInt(req.body.stock, 10); 

        if (!name || !category || !description || !price || !stock) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "At least one image is required" });
        }

        const imgUrls = req.files.map(file => `/uploads/${file.filename}`);
        const userEmail = req.body.userEmail;

        const newProduct = new Product({
            name,
            category,
            description,
            price,
            stock,
            imgUrl: imgUrls,
            userEmail,
        });

        await newProduct.save();
        res.status(200).json({ message: "New Product added successfully", newProduct });
    } catch (error) {
        console.error("Error in createProduct:", error);
        res.status(500).json({ message: error.message });
    }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getproductbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json({ message: 'Data found', data: product });
    }
    return res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, description, price, stock, userEmail } = req.body;

    const updatedFields = {
      name,
      category,
      description,
      price,
      stock,
      userEmail,
    };

    if (req.files && req.files.length > 0) {
      const imgUrls = req.files.map(file => `/uploads/${file.filename}`);
      updatedFields.imgUrl = imgUrls;
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedFields, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update product' });
  }
};

const deleteproduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, getproductbyid, updateproduct, getAllProducts, deleteproduct };
