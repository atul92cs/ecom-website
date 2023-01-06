const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const User=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    email:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    mobile:{
        type:DataTypes.STRING,
        allowNull:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true
    },
    usertype:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});
module.exports=User;