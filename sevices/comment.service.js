const { comments } = require("../models/index");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { Op } = require("sequelize");
const { tutorials } = require("../models/index.js");
const getComments = async() => {
    // return comments.findAll({ include: [{ model: tutorials, as: "tutorials" }] });
    // using alias 
    // return comments.findAll({ include: "tutorial" });
    // pass model and use alias
    return comments.findAll({ include: [{ model: tutorials, as: "tutorial" }] });

    tutorial
    // return comments.findAll();

}
const getComment = async(id) => {
    const comment = await comments.findAll({
        where: {
            id: id
        }
    })
    if (!comment) {
        throw new ApiError(httpStatus.NOT_FOUND, "Can not found comment with commentID")
    }
    return comment;
}
const createComment = async(comment) => {
    return comments.create(comment);
}
const updateComment = async(id, comment) => {
    const updateCommnet = await comments.update(comment, {
        where: { id: id }
    })
    if (!updateCommnet) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Can not update comment");
    }
    return updateCommnet;
}

const deleteComment = async(id) => {
    const deleteComment = await comments.destroy({
        where: {
            id: id
        },
        returning: true,
        plain: true
    })
    if (!deleteComment) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Can not delete comment")
    }
    return deleteComment;
}
const getCommentWithIdTutortial = async(tutorialId) => {
    return await comments.findAll({
        where: {
            tutorialId: tutorialId
        }
    })
}
module.exports = {
    getComments,
    getComment,
    createComment,
    updateComment,
    deleteComment,
    getCommentWithIdTutortial
}