module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "11062002",
    DB: "hit",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};