let axios=require('axios');
let path=require('path');
let {cmsapi}=require('../config');
require('dotenv').config({path:path.join(__dirname,'/.env')});
getCategories=async(req,res)=>{
    let caturl=process.env.CMS_API+'category';

    let data=await axios({
        url:caturl,
        method:'GET'
    });
    let {data:{categories}}=data;
    return res.status(200).json({
        categories:categories
    });
}
module.exports={getCategories};