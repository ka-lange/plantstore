const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shop')

router.get('/', shopController.getIndex) //uses home controller to get index page and render index.js from views

router.put('/addToCart', shopController.addToCart)

module.exports = router