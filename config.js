const path=require('path');
require('dotenv').config({path:path.join(__dirname,'/.env')});
module.exports={
    cmsapi:process.env.CMS_API
};