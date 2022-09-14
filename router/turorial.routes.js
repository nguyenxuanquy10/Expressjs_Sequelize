const express = require('express'); //
const router = express.Router();
const { tutorialController } = require('../controllers/index')

router.
route('/')
    .get(tutorialController.getTutorials)
    .post(tutorialController.createTutorial)


router.
route('/:id')
    .get(tutorialController.getTutorial)
    .patch(tutorialController.updateTutorial)
    .delete(tutorialController.deleteTutorial)

module.exports = router;