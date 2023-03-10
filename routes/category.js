let {getCategories}=require('../controllers/categoryController');
let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    getCategories(req,res);
});

module.exports=router;