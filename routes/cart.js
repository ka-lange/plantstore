const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cart')

router.get('/', cartController.getIndex) //uses home controller to get index page and render index.js from views

router.put('/removeFromCart', cartController.removeFromCart)

module.exports = router