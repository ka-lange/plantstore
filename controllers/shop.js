const Plant = require('../models/Plant')


module.exports = {
    getIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            const Plants = await Plant.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            // const itemsLeft = await Todo.countDocuments({completed: false})
            
            res.render('shop.ejs', {plants: Plants})

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
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    
}