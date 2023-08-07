const express = require('express')
const router = express.Router()
const aboutController = require('../controllers/about')

router.get('/', aboutController.getIndex) //uses home controller to get index page and render index.js from views

module.exports = router