

const Order=require('./order');
const OrderDetails=require('./orderdetails');
const Cart=require('./cart');
const sequelize=require('../config/database');
module.exports={
    Cart,
   Order,
    OrderDetails
}
sequelize.sync({alter:true}).then((result)=>{
    
    console.log('table synced');
}).catch(err=>{
    console.log('error-->',err);
});