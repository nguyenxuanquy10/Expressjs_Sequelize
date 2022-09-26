const { users } = require("../models/index");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const getUsers = async() => {
    return users.findAll();
}

const getUser = async(userId) => {
    // console.log(userId);
    const user = await users.findByPk(userId);
    //  await user.validPassword("123123");
    // console.log(user.password);
    // console.log(await user.validPassword("123123"));
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "Can not found user with id ");
    }
    return user;
}

const createUser = async(user) => {
    return users.create(user)
}

const updateUser = async(userId, user) => {
    const updateUser = await users.update(user, {
        where: {
            id: userId
        },
        returning: true,
        plain: true
    })
    if (!updateUser) {
        throw new ApiError(httpStatus.NOT_FOUND, "Can not found user with id")
    }
    return updateUser
}
const deleteUser = async(userId) => {
    const deleteUser = await users.destroy({
        where: {
            id: userId,
        },
        returning: true,
        plain: true
    })
    if (!deleteUser) {
        throw new ApiError(httpStatus.NOT_FOUND, "Can not found user with id")
    }
    return deleteUser
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}