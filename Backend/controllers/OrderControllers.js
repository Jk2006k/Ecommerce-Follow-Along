const Order = require('../models/OrderModels');
const User = require('../models/UseModels');

const createOrder = async (req, res) => {
  try {
    const { userEmail, items, totalPrice, address } = req.body;
    console.log(req.body)
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const orders = new Order({userId: user._id, totalPrice,items, address})
    await orders.save()
    console.log('Orders created:', orders); 
    res.status(201).json({ message: 'Orders created successfully', orders });
  } catch (error) {
    console.error('Error creating orders:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const { userEmail } = req.body;
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const orders = await Order.find({ userId: user._id });

    console.log('Orders fetched:', orders);
    res.status(200).json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error); 
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createOrder, getUserOrders };