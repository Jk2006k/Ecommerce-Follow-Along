const Cart = require('../models/CartModels');

const addToCart = async (req, res) => {
  try {
    const { name, price, quantity, image } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    let cartItem = await Cart.findOne({ name });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
      res.status(200).json({ message: "Product quantity updated in cart", cart: cartItem });
    } else {
      const newCartItem = new Cart({
        name,
        price,
        quantity,
        image
      });

      await newCartItem.save();
      res.status(200).json({ message: "Product added to cart", cart: newCartItem });
    }
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

const increaseQuantity = async (req, res) => {
    try {
      const { id } = req.params;
      const cartItem = await Cart.findById(id);
  
      if (!cartItem) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      cartItem.quantity += 1;
      await cartItem.save();
      res.status(200).json({ message: "Quantity increased", cart: cartItem });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  
  const decreaseQuantity = async (req, res) => {
    try {
      const { id } = req.params;
      const cartItem = await Cart.findById(id);
  
      if (!cartItem) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        await cartItem.save();
        res.status(200).json({ message: "Quantity decreased", cart: cartItem });
      } else {
        res.status(400).json({ message: "Quantity cannot be less than 1" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };


module.exports = { addToCart, getCartItems, removeFromCart, increaseQuantity, decreaseQuantity };