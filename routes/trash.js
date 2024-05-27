const express = require('express')

const router = express.Router()

const trashesControllers = require('../controllers/trashes')

router.get('/', trashesControllers.getTrashes)

module.exports = router
