const Order = require('../models/OrderModels');
const User = require('../models/UseModels');

const createOrder = async (req, res) => {
  try {
    const { userEmail, items, totalPrice, address } = req.body;

        const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

        const orders = items.map(item => ({
            userId: user._id,
            items: [item],
            totalPrice: item.price * item.quantity,
            address,
            status: 'Pending'
    }));

        const savedOrders = await Order.insertMany(orders);

    res.status(201).json({ message: 'Orders created successfully', orders: savedOrders });
  } catch (error) {
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

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createOrder, getUserOrders };