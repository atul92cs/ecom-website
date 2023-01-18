let {Product,Picture,Category,Subcategory}=require('../models');
let {generateCondition}=require('../helpers/conditionbuilder');
let {Op}=require('sequelize');
getProducts=async(req,res)=>{
    let products;
    if(req.query)
    {
        condition=generateCondition(req);
        products=await Product.findAll({
            where:{
                [Op.or]:condition
            },
            include:[
               {
                   model:Picture
               },
               {
                   model:Category
               },
               {
                   model:Subcategory
               }
            ]
       });
    }
    else
    {
        products=await Product.findAll({
            include:[
               {
                   model:Picture
               },
               {
                   model:Category
               },
               {
                   model:Subcategory
               }
            ]
       });
    }
    
    return products;
}
module.exports={getProducts};