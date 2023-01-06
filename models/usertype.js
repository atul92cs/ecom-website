const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const User=require('./user');
const UserType=sequelize.define('usertype',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});
UserType.hasMany(User,{foreignKey:'user_type'});
User.belongsTo(UserType,{foreignKey:'user_type'});
module.exports=UserType;