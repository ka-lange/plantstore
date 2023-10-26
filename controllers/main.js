const Plant = require('../models/Plant')
module.exports = {
    getIndex: async (req,res)=>{
       
        try{
            const Plants = await Plant.find()
            res.render('index.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    getAbout: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // const Habits = await Habit.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            // const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('about.ejs')
        }catch(err){
            console.log(err)
        }
    },
    getCare: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        const plantId = req.params.id;
        console.log(plantId)
        try{
            const Plants = await Plant.find()
            const thisPlant = await Plant.findById(plantId);
            console.log(thisPlant)
                res.render('care.ejs', {plants: Plants, thisPlant: thisPlant})
        }catch(err){
            console.log(err)
        }
    },
    getReference: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // const Habits = await Habit.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            // const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('reference.ejs')
        }catch(err){
            console.log(err)
        }
    },
    
}
