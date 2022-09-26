const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
const ApiError = require("../utils/ApiError");
module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            // validate: {
            //     is: /^[0-9a-f]{64}$/i
            // }
            //
            // validate: {
            //     validatePassword: function(value) {
            //         if (!/^(13|14|15|17|18)\d{9}$/i.test(value) && !/^((\(\d{2,3}\))|(\d{3}\-)|(\d{3}))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value)) {
            //             throw new Error('password format error!')
            //         }
            //     }
            // }

            // set(value) {
            //     /Storing passwords in plaintext in the database is terrible.
            //      Hashing the value with an appropriate cryptographic hash function is better.
            //     set hass password to view 
            //     this.setDataValue('password', hash(value));
            //   }
        },
        email: {
            type: DataTypes.STRING,
            allow: false,
            validate: {
                validataEmail: function(value) {
                    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
                        throw new Error("Email is not valid ");
                    }
                }
            }
        }
    }, {
        timeStamp: false,
        instanceMethods: {
            //     generateHash(password) {
            //         return bcrypt.hash(password, bcrypt.genSaltSync(8));
            //     },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
            // },
            // beforeCreate: async function(user) {
            //     const salt = await bcrypt.genSalt(10); //whatever number you want
            //     Users.password = await bcrypt.hash(user.password, salt);
        }
    })
    Users.beforeCreate(async function(model, options) {
        const encrypted = await bcrypt.hash(model.password, bcrypt.genSaltSync(8));
        model.password = encrypted;
    });

    Users.prototype.validPassword = async function(password) {
        return bcrypt.compare(password, this.password);
    }

    // Users.method('validPassword', async function(password) {
    //     return bcrypt.compare(password, this.password);
    // })
    return Users;
}