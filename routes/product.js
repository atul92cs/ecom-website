let {getProducts}=require('../controllers/productController');
let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    getProducts(req,res);
});

module.exports=router;