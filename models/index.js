const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.model')(sequelize, Sequelize)
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.comments = require('./comment.model')(sequelize, Sequelize);
db.tags = require('./tag.model')(sequelize, Sequelize);
db.videos = require('./video.model')(sequelize, Sequelize);
db.videoTag = require("./video.tag.model")(sequelize, Sequelize);
db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
    foreignKey: "tutorialId",
    as: "tutorial"
});
db.videos.belongsToMany(db.tags, { through: db.videoTag });
db.tags.belongsToMany(db.videos, { through: db.videoTag });
module.exports = db;