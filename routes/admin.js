const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.get('/', adminController.getIndex) //uses home controller to get index page and render index.js from views

router.post('/addPlant', adminController.addPlant)

router.put('/adminEdit', adminController.adminEdit) 

router.delete('/adminDelete', adminController.adminDelete)

module.exports = router