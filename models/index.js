const Category=require('./category');
const Subcategory=require('./subcategory');
const Product=require('./product');
const Order=require('./order');
const OrderDetails=require('./orderdetails');
const Cart=require('./cart');
const Dimension=require('./dimension');
const Picture=require('./picture');
const User=require('./user');
const UserType=require('./usertype');
const sequelize=require('../config/database');
module.exports={
    Category,
    Cart,
    Subcategory,
    Product,
    Order,
    OrderDetails,
    Dimension,
    Picture,
    User,
    UserType
}
sequelize.sync({alter:true}).then((result)=>{
    
    console.log('table synced');
}).catch(err=>{
    console.log('error-->',err);
});