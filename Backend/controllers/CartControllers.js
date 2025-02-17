const Cart = require('../models/CartModels');

const addToCart = async (req, res) => {
  try {
    const { name, price, quantity, image } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newCartItem = new Cart({
      name,
      price,
      quantity,
      image
    });

    await newCartItem.save();
    res.status(200).json({ message: "Product added to cart", cart: newCartItem });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = { addToCart, getCartItems, removeFromCart };