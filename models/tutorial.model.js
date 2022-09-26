module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        description : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        published : {
            type : Sequelize.BOOLEAN,
            allowNull : false,
        }
    });
    return Tutorial;
};