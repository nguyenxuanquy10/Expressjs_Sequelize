const DataTypes = require('@sequelize/core');


module.exports = (sequelize, Sequelize) => {
    const videoTags = sequelize.define("videoTags", {
        videoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "video",
                key: "id",
            }
        },
        tagId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "tag",
                key: "id",
            }
        }
    }, {
        timeStamp: false
    });
    return videoTags;
}