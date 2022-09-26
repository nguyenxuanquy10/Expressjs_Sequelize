const userService = require("../sevices/user.service")
const httpStatus = require("http-status")
const catchAsync = require("../utils/catchAsync");

const getUsers = catchAsync(async(req, res, next) => {
    const users = await userService.getUsers();
    return res.status(httpStatus.OK).json({ users });
})

const getUser = catchAsync(async(req, res, next) => {
    // console.log(req.params.userId)
    const user = await userService.getUser(req.params.userId);
    return res.status(httpStatus.OK).json({ user: user });
})

const createUser = catchAsync(async(req, res, next) => {
    const newUser = await userService.createUser(req.body);
    return res.status(httpStatus.CREATED).json({ newUser: newUser });
})

const updateUser = catchAsync(async(req, res, next) => {
    const updateUser = await userService.updateUser(req.params.userId, req.body);
    return res.status(httpStatus.OK).json({ updateUser: updateUser })
})

const deleteUser = catchAsync(async(req, res, next) => {
    // console.log(req.params.userId)
    const deleteUser = await userService.deleteUser(req.params.userId);
    return res.status(httpStatus.OK).json({ deleteUser: deleteUser })
})

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}