const express=require('express');
const router=express.Router();
const{login,signUp,getUserProfile, addAddress, removeAddress, getAllAddresses}=require('../controllers/UserControllers');
const { upload } = require('../config/multer');
const authMiddleware = require('../middleware/authmiddlware');
const {createOrder}=require('../controllers/OrderControllers')


router.post('/signup',upload.single('file'),signUp);
router.post('/login',login)
router.post('/profile',getUserProfile)
router.post('/profile/address',addAddress)
router.post('/profile/remove',removeAddress)
router.post('/profile/addresses',getAllAddresses)
router.post('/orders', createOrder); 

module.exports=router;
