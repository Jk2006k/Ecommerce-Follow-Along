const express=require('express');
const router=express.Router();
const{login,signUp}=require('../controllers/UserControllers');
const { upload } = require('../config/multer');

router.post('/signup',upload.single('file'),signUp);
router.post('/login',login)
module.exports=router;
