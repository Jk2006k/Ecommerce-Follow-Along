const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, removeFromCart, increaseQuantity, decreaseQuantity, removeProductFromCart } = require('../controllers/CartControllers');

router.post('/add', addToCart);
router.get('/items', getCartItems);
router.delete('/remove/:id', removeFromCart);
router.patch('/increase/:id', increaseQuantity);
router.patch('/decrease/:id', decreaseQuantity);
router.delete('/removeProduct/:id', removeProductFromCart); 

module.exports = router;