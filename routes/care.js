const express = require('express')
const router = express.Router()
const careController = require('../controllers/care')

router.get('/', careController.getIndex) //uses home controller to get index page and render index.js from views

module.exports = router