const Plant = require('../models/Plant')


module.exports = {
    getIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            const Plants = await Plant.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            // const itemsLeft = await Todo.countDocuments({completed: false})
            
            res.render('shop.ejs', {plants: Plants, page_name: 'Shop'})

        }catch(err){
            console.log(err)
        }
    },
    addToCart: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            await Plant.findOneAndUpdate({_id:req.body.plantIdFromJSFile},{
                inCart: true 
            })
            console.log('Added to Cart')
            res.json('Added to Cart')
        }catch(err){
            console.log(err)
        }
    },
    sortPriceLowHigh: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            const Plants = await Plant.find().sort({price: -1, price: 1 })
            res.render('shop.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    sortPriceHighLow: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            const Plants = await Plant.find().sort({price: 1, price: -1 })
            res.render('shop.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    sortAZ: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            const Plants = await Plant.find().sort({commonName: -1, commonName: 1 })
            res.render('shop.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    sortZA: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            const Plants = await Plant.find().sort({commonName: 1, commonName: -1 })
            res.render('shop.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    filterPothos: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            const Plants = await Plant.find({type: 'pothos'})
            res.render('shop.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    filterPhilos: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            const Plants = await Plant.find({type: 'philodendron'})
            res.render('shop.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    filterOthers: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            const Plants = await Plant.find({type: 'other'})
            res.render('shop.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
}