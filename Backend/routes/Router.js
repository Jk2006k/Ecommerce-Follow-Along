const express=require('express');
const router=express.Router();
const{login,signUp,getUserProfile, addAddress, removeAddress, getAllAddresses}=require('../controllers/UserControllers');
const { upload } = require('../config/multer');
const authMiddleware = require('../middleware/authmiddlware');
const { createOrder, getUserOrders, cancelOrder } = require('../controllers/OrderControllers');


router.post('/signup',upload.single('file'),signUp);
router.post('/login',login)
router.post('/profile',getUserProfile)
router.post('/profile/address',addAddress)
router.post('/profile/remove',removeAddress)
router.post('/profile/addresses',getAllAddresses)
router.post('/orders', createOrder); 
router.post('/user/orders', getUserOrders); 
router.post('/order/cancel', cancelOrder); 


module.exports=router;
