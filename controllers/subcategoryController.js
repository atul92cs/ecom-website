let axios=require('axios');
//const {generateCondition}=require('../helpers/condition-builder');
getSubcategory=async(req,res)=>{
    let subcaturl=process.env.CMS_API;
    let {filter}=req.query;
    if(!fitler)
    {
        let data=await axios.get({
            url:subcaturl,
            method:'get'
        });
        return res.status(200).json({
            subcategories:data.subcategories
        });
    }
    else
    {
        subcaturl=subcaturl+filter;
        let data=await axios.get({
            url:subcaturl,
            method:'get'
        });
        return res.status(200).json({
            subcategories:data.subcategories
        });
    }
}
module.exports={getSubcategory};