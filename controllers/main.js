const Plant = require('../models/Plant')
module.exports = {
    getIndex: async (req,res)=>{
       
        try{
            const Plants = await Plant.find()
            res.render('index.ejs', {plants: Plants, page_name: 'Home'})
        }catch(err){
            console.log(err)
        }
    },
    getAbout: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // const Habits = await Habit.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            // const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('about.ejs', {page_name: 'About'})
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
                res.render('care.ejs', {plants: Plants, thisPlant: thisPlant, page_name: 'Care'})
        }catch(err){
            console.log(err)
        }
    },
    getReference: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            // const Habits = await Habit.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
            // const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('reference.ejs', {page_name:'reference'})
        }catch(err){
            console.log(err)
        }
    },
    
}
