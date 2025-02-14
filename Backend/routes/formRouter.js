const router = require('express').Router();
const { upload } = require('../config/multer');
const { createProduct, getAllProducts, getproductbyid, updateproduct, deleteproduct } = require('../controllers/formControllers');

router.post('/create', upload.array('images', 10), createProduct); 
router.get('/get', getAllProducts);
router.get('/:id', getproductbyid);
router.put('/update/:id', upload.array('images', 10), updateproduct); 
router.delete('/:id', deleteproduct);

module.exports = router;


