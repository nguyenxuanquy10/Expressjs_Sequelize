const commentService = require("../sevices/comment.service");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status")

const getComments = catchAsync(async(req, res, next) => {
    const comments = await commentService.getComments();
    return res.status(httpStatus.OK).json({ comments });
})
const getComment = catchAsync(async(req, res, next) => {
    const comment = await commentService.getComment(req.query.id);
    return res.status(httpStatus.OK).json({ comment })
})

const createComment = catchAsync(async(req, res, next) => {
    const newComment = await commentService.createComment(req.body);
    if (!newComment) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: "Can not create new comment" });
    }
    return res.status(httpStatus.OK).json({ newComment })
})

const updateComment = catchAsync(async(req, res, next) => {
    const updateComment = await commentService.updateComment(req.params.id, req.body);
    return res.status(httpStatus.OK).json({ updateComment });
})

const deleteComment = catchAsync(async(req, res, next) => {
    const deleteComment = await commentService.deleteComment(id);
    return res.status(httpStatus.OK).json({ deleteComment })
})
const getCommentWithIdTutortial = catchAsync(async(req, res, next) => {
    const getCommentWithIdTutortil = await commentService.getCommentWithIdTutortial(req.params.id)
})
module.exports = {
    getComments,
    getComment,
    createComment,
    updateComment,
    deleteComment,
    getCommentWithIdTutortial
}