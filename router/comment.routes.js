const express = require('express'); //
const router = express.Router();
const commentController = require('../controllers/comment.controller')

router.
route('/')
    .get(commentController.getComments)
    .post(commentController.createComment)


router.
route('/:id')
    .get(commentController.getComment)
    .patch(commentController.updateComment)
    .delete(commentController.deleteComment)

module.exports = router;