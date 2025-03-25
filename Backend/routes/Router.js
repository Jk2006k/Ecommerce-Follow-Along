const express = require('express');
const router = express.Router();
const { login, signUp, getUserProfile, addAddress, removeAddress, getAllAddresses } = require('../controllers/UserControllers');
const { createOrder, getUserOrders, cancelOrder } = require('../controllers/OrderControllers');
const { makePayment, verifyPayment } = require('../controllers/PaymentControllers');
const { upload } = require('../config/multer');
const authMiddleware = require('../middleware/authmiddlware');

router.post('/signup', upload.single('file'), signUp);
router.post('/login', login);
router.post('/profile', authMiddleware, getUserProfile);
router.post('/profile/address', authMiddleware, addAddress);
router.post('/profile/remove', authMiddleware, removeAddress);
router.post('/profile/addresses', authMiddleware, getAllAddresses);
router.post('/orders', authMiddleware, createOrder);
router.post('/user/orders', authMiddleware, getUserOrders);
router.post('/order/cancel', authMiddleware, cancelOrder);
router.post('/checkout', authMiddleware, makePayment);
router.post('/verify', authMiddleware, verifyPayment);

module.exports = router;






