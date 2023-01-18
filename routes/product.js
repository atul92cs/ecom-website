let {getProducts}=require('../controllers/productController');
let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    getProducts(req,res).then(result=>{
        return res.status(200).json({
            products:result
        });
    });
});

module.exports=router;