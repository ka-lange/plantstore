const Plant = require('../models/Plant')

module.exports = {
    getIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            const Plants = await Plant.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            res.render('admin/home.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    getAddIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            const Plants = await Plant.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            res.render('admin/add.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    getEditIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            const Plants = await Plant.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            res.render('admin/edit.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    getPreviewIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        plantId = req.params.id
        try{
            const Plants = await Plant.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            const thisPlant = await Plant.findById(plantId);
            res.render('admin/preview.ejs', {plants: Plants, thisPlant: thisPlant})
        }catch(err){
            console.log(err)
        }
    },
    getPreviewPlant: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        plantId = req.params.id
        try{
            const Plants = await Plant.find()
            const thisPlant = await Plant.findById(plantId);
            console.log(thisPlant)
            res.render('admin/preview.ejs', {plants: Plants, thisPlant: thisPlant})
        }catch(err){
            console.log(err)
        }
    },
    addPlant: async (req, res)=>{
        try{
            await Plant.create({
                commonName: req.body.commonName, 
                scientificName: req.body.scientificName,
                type: req.body.type,
                description: req.body.description,
                img: 'PlantPhotos/' + req.body.img,
                price: req.body.price,
                waterReq: req.body.waterReq,
                waterNotes: req.body.waterNotes,
                lightReq: req.body.lightReq,
                lightNotes: req.body.lightNotes,
                toxicity: req.body.toxicity,
                toxicityNotes: req.body.toxicityNotes,
                inCart: false,
                active: false,
                featured: false,
                }) 
            console.log('plant has been added!')
            res.redirect('/admin')
        }catch(err){
            console.log(err)
        }
    },
    setFeatured: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
            try{
                await Plant.findOneAndUpdate({_id:req.body.plantIdFromJSFile},{
                    featured: true 
                })
                console.log('Added to Featured')
                res.json('Added to Featured')
            }catch(err){
                console.log(err)
            } 
    },
    removeFeatured: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
            try{
                await Plant.findOneAndUpdate({_id:req.body.plantIdFromJSFile},{
                    featured: false 
                })
                console.log('Removed from Featured')
                res.json('Removed from Featured')
            }catch(err){
                console.log(err)
            } 
    },
    setActive: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            await Plant.findOneAndUpdate({_id:req.body.plantIdFromJSFile},{
                active: true 
            })
            console.log('Made Active')
            res.json('Made Active')
        }catch(err){
            console.log(err)
        }
    },
    setInActive: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            await Plant.findOneAndUpdate({_id:req.body.plantIdFromJSFile},{
                active: false 
            })
            console.log('Made Active')
            res.json('Made Active')
        }catch(err){
            console.log(err)
        }
    },
    adminDelete: async (req,res)=>{
        //console.log(req.body.habitIdFromJSFile)
        try{
            await Plant.findOneAndDelete({_id:req.body.plantIdFromJSFile})
            console.log(`Deleted Plant`)
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    adminEdit: async (req, res)=>{
        try{
            await Plant.findOneAndUpdate({_id:req.body.plantIdFromJSFile},{
                commonName: req.body.newCommonNameFromJSFile,
                scientificName: req.body.newScientificNameFromJSFile,
                type: req.body.newTypeFromJSFile,
                description: req.body.newDescriptionFromJSFile,
                img: req.body.newImgFromJSFile,
                price: req.body.newPriceFromJSFile,
                waterReq: req.body.newWaterReqFromJSFile,
                waterNotes: req.body.newWaterNotesFromJSFile,
                lightReq: req.body.newLightReqFromJSFile,
                lightNotes: req.body.newLightNotesFromJSFile,
                toxicity: req.body.newToxicityFromJSFile,
                toxicityNotes: req.body.newToxicityNotesFromJSFile,
            })
            console.log('Plant changed!')
            res.json('Plant Changed')
        }catch(err){
            console.log(err)
        }
    },
}