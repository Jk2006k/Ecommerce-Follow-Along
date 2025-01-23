const express=require('express');

const router=express.Router();
const signup=require('../controllers/UserControllers');
const { upload } = require('../config/multer');

router.post('./signup',upload.single('file'),signup);

module.exports=router;
