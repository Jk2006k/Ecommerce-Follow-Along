const router=require('express').Router()

const{createProduct,getProduct,getproductbyid,updateproduct,deleteproduct}=require('../controllers/formControllers');


router.post('/',createProduct);
router.get('/get',getProduct);
router.get('/:id',getproductbyid);
router.put('/:id',updateproduct);
router.delete('/:id',deleteproduct);

module.exports=router;