module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tag',{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true,
        },
        name : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        num_memeber : {
            type : DataTypes.INTEGER,
            allowNull : false,
        }
    },{
        timestamps : true,
        paranoid : true,
    });
};
