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
        try{
            const Plants = await Plant.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            res.render('admin/preview.ejs', {plants: Plants})
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
                price: req.body.price,
                quantity: req.body.quantity,
                inCart: false,
                }) 
            console.log('plant has been added!')
            res.redirect('/admin')
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
                description: req.body.newDescriptionFromJSFile,
                price: req.body.newPriceFromJSFile,
                quantity: req.body.newQuantityFromJSFile,
            })
            console.log('Plant changed!')
            res.json('Plant Changed')
        }catch(err){
            console.log(err)
        }
    },
}