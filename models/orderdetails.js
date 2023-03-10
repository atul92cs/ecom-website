const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Order = require('./order');
const Product = require('./product');
const OrderDetails=sequelize.define('orderdetail',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    orderid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    productid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    cost:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});
Order.hasMany(OrderDetails,{foreignKey:'orderid'});
OrderDetails.belongsTo(Order,{foreignKey:'orderid'});
module.exports=OrderDetails;