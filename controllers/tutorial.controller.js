const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status")
const tutorialService = require("../sevices/tutorial.service");
const getTutorials = catchAsync(async(req, res, next) => {
    const tutorials = await tutorialService.getTutorials();
    return res.status(httpStatus.OK).json({ tutorials: tutorials });
})

const getTutorial = catchAsync(async(req, res, next) => {
    const tutorial = await tutorialService.getTutorial(req.params.id);
    return res.status(httpStatus.OK).json({ tutorials: tutorial })
})

const createTutorial = catchAsync(async(req, res, next) => {
    const newTutorial = await tutorialService.createTutorial(req.body)
    return res.status(httpStatus.OK).json(newTutorial)
})

const updateTutorial = catchAsync(async(req, res, next) => {
    const updateTutorial = await tutorialService.updateTurorial(req.params.id, req.body);
    return res.status(httpStatus.OK).json({ updateTutorial });

})

const deleteTutorial = catchAsync(async(req, res, next) => {
    const deleteTutorial = await tutorialService.deleteTutorial(req.params.id)
    return res.status(httpStatus.OK).json({ deleteTutorial })

})

const deleteTutorials = catchAsync(async(req, res, next) => {
    const deleteTutorials = await tutorialService.deleteTutorials();
})
module.exports = {
    getTutorials,
    getTutorial,
    createTutorial,
    deleteTutorial,
    updateTutorial,
    deleteTutorials
}