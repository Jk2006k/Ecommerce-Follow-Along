const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, removeFromCart } = require('../controllers/CartControllers');

router.post('/add', addToCart);
router.get('/items', getCartItems);
router.delete('/remove/:id', removeFromCart);

module.exports = router;