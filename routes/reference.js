const express = require('express')
const router = express.Router()
const referenceController = require('../controllers/reference')

router.get('/', referenceController.getIndex) //uses home controller to get index page and render index.js from views

module.exports = router