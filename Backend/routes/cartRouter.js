const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, removeFromCart, increaseQuantity , decreaseQuantity} = require('../controllers/CartControllers');

router.post('/add', addToCart);
router.get('/items', getCartItems);
router.delete('/remove/:id', removeFromCart);
router.patch('/increase/:id', increaseQuantity);
router.patch('/decrease/:id', decreaseQuantity);

module.exports = router;