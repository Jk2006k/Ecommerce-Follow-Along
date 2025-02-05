const router=require('express').Router()

const{createProduct,getAllProducts,getproductbyid,updateproduct,deleteproduct}=require('../controllers/formControllers');


router.post('/',createProduct);
router.get('/get',getAllProducts);
router.get('/:id',getproductbyid);
router.put('/:id',updateproduct);
router.delete('/:id',deleteproduct);



module.exports=router;

