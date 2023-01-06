const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Product=require('./product');
const User=require('./user');
const Cart=sequelize.define('cart',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    price:{
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
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});
Cart.hasMany(Product,{foreignKey:'productId'});
Product.belongsTo(Cart,{foreignKey:'productId'});
User.hasOne(Cart,{foreignKey:'userId'});
Cart.belongsTo(User,{foreignKey:'userId'});
module.exports=Cart;