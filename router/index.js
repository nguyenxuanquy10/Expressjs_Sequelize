const express = require('express'); //
const commentRouter = require('./comment.routes');
const tutorialRouter = require('./turorial.routes');
const userRouter = require("./user.routes")
const router = express.Router();
const defaultRouter = [{
        path: '/comment',
        route: commentRouter
    },
    {
        path: '/tutorial',
        route: tutorialRouter
    }, {
        path: '/user',
        route: userRouter
    }
]
defaultRouter.forEach((currentRoute, index) => {
    router.use(currentRoute.path, currentRoute.route)
})

module.exports = router;