const Plant = require('../models/Plant')
module.exports = {
    getIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            const Plants = await Plant.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            // const itemsLeft = await Todo.countDocuments({completed: false})
            
            res.render('cart.ejs', {plants: Plants, page_name:'cart'})

        }catch(err){
            console.log(err)
        }
    },
    removeFromCart: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // res.render('shop.ejs', {plants: Plants})
            await Plant.findOneAndUpdate({_id:req.body.plantIdFromJSFile},{
                inCart: false 
            })
            console.log('Removed to Cart')
            res.json('Removed to Cart')
        }catch(err){
            console.log(err)
        }
    },
    
}