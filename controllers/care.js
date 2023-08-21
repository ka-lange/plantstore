const Plant = require('../models/Plant')

module.exports = {
    getIndex: async (req,res)=>{
        // res.render('index.ejs') //renders ejs file and reponds with it
        try{
            const Plants = await Plant.find()
            res.render('care.ejs', {plants: Plants})
        }catch(err){
            console.log(err)
        }
    },
    getPlantById: async (req,res, next)=>{
        
        const plantId = req.params.id; //grab individual item from object
        console.log(plantId)
        // const thisPlant = await Plant.findById(plantId)
        try {
        const thisPlant = await Plant.findById(plantId);

        if(!thisPlant){
            console.log('error somewhere')
        } else {
            res.send(thisPlant);
        }
        
        } catch(err) {
            console.log(err)
        }
    },
}
