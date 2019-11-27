module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment',{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true,
        },
        content : {
            type : DataTypes.STRING(50),
            allowNull : false,
        },
        nick : {
            type : DataTypes.STRING(15),
            allowNull : false,
        }
    },{
        timestamps : true,
        paranoid : true,
    });
};
