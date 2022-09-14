module.exports = (sequelize, Sequelize) => {
    const Tags = sequelize.define("tag", {
        tagName: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "video",
        },
    });
    return Tags;
}