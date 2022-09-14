const { tutorials } = require("../models/index");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const getTutorials = async() => {
    return tutorials.findAll();
}
const getTutorial = async(id) => {
    const tutorial = await tutorials.findAll({
        where: {
            id: id,
        }
    })
    if (!tutorial) {
        throw new ApiError(httpStatus.NOT_FOUND, "Can not find tutorial with id ")
    }
    return tutorial;
}
const createTutorial = async(tutorial) => {
    const newTutorial = await tutorials.create(tutorial);
    if (!newTutorial) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Can not create new Tutorial")
    }
    return newTutorial;
}
const updateTurorial = async(id, tutorial) => {
    const updateTutorial = await tutorials.update(tutorial, {
        where: { id: id }
    })
    if (!updateTutorial) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Can not update tutorial with id")
    }
    return updateTurorial;
}
const deleteTutorial = async(id) => {
    const deleteTutorial = await tutorials.destroy({
        where: {
            id: id,
        }
    })
    if (!deleteTutorial) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Can not delete tutorial with id")
    }
    return deleteTutorial;
}

const deleteTutorials = async() => {
    return tutorials.destroy({ truncate: { cascade: false } })
}
module.exports = {
    getTutorials,
    getTutorial,
    createTutorial,
    updateTurorial,
    deleteTutorial,
    deleteTutorials,
}