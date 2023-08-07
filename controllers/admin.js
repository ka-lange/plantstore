const Plant = require('../models/Plant')

module.exports = {
    getIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // const Habits = await Habit.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            // const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('admin.ejs')
        }catch(err){
            console.log(err)
        }
    },
    addPlant: async (req, res)=>{
        try{
            await Plant.create({
                commonName: req.body.commonName, 
                scientificName: req.body.scientificName,
                price: req.body.price,
                inCart: false,
                }) 
            console.log('plant has been added!')
            res.redirect('/admin')
        }catch(err){
            console.log(err)
        }
    },
    
}