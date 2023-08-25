const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shop')

router.get('/', shopController.getIndex) //uses home controller to get index page and render index.js from views

// router.get(`/:id`, shopController.seePlant)

router.get('/sortPriceLowHigh', shopController.sortPriceLowHigh)
router.get('/sortPriceHighLow', shopController.sortPriceHighLow)
router.get('/sortAZ', shopController.sortAZ)
router.get('/sortZA', shopController.sortZA)

router.get('/filterPothos', shopController.filterPothos)
router.get('/filterPhilos', shopController.filterPhilos)
router.get('/filterOthers', shopController.filterOthers)

router.put('/addToCart', shopController.addToCart)

module.exports = router