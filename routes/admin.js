const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.get('/', adminController.getIndex) //uses home controller to get index page and render index.js from views

router.get('/add', adminController.getAddIndex)
router.get('/edit', adminController.getEditIndex)
router.get('/preview', adminController.getPreviewIndex)
router.get('/preview/:id', adminController.getPreviewPlant)

router.post('/addPlant', adminController.addPlant)

router.put('/adminEdit', adminController.adminEdit) 
router.put('/setFeatured', adminController.setFeatured) 
router.put('/removeFeatured', adminController.removeFeatured) 
router.put('/setActive', adminController.setActive) 
router.put('/setInActive', adminController.setInActive) 

router.delete('/adminDelete', adminController.adminDelete)

module.exports = router