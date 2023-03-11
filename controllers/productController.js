let axios=require('axios');
let {cmsapi}=require('../config');

getProducts=async(req,res)=>{
   
    let producturl=cmsapi+'product';
    
    let {filter}=req.query;
    if(!filter)
    {
        let data=await axios.get(producturl,{timeout: 5000});
        let{data:{products}}=data;
        return res.status(200).json({
            products:products
        });
    }
    else
    {
        producturl=producturl+req.query;
        let data=await axios.get(producturl);
        let {data:{products}}=data;
        return res.status(200).json({
            products:products
        });
    }
}
module.exports={getProducts};