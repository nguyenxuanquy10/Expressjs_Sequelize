const DataTypes = require('@sequelize/core');
module.exports = (sequelize, Sequelize) => {
    const Videos = sequelize.define("video", {
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createAted: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    })
    return Videos;
}