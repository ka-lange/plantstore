const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.getIndex) //uses home controller to get index page and render index.js from views
router.get('/about', mainController.getAbout)
router.get('/care', mainController.getCare)

module.exports = router