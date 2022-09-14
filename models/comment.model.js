const DataTypes = require('@sequelize/core');

module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comment", {
        content: {
            type: Sequelize.STRING,
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    }, { timestamps: false })
    return Comments;
}