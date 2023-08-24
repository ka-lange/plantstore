const Plant = require('../models/Plant')

module.exports = {
    getIndex: async (req,res)=>{
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
    // getPlantById: async (req,res)=>{
    //     const plantId = req.params.id; //grab individual item from object
    //     console.log(plantId)
    //     // const thisPlant = await Plant.findById(plantId)
    //     try {
    //         const thisPlant = await Plant.findById(plantId);
    //         const Plants = await Plant.find()
    //         // res.send(thisPlant);
    //         res.render('plant.ejs', {plants: Plants, thisPlant: thisPlant})
    //     } catch(err) {
    //         console.log(err)
    //     }
    // },
    // getPlantFromShop: async (req,res)=>{
    //     const plantId = req.params.id; //grab individual item from object
    //     console.log(plantId)
    //     // const thisPlant = await Plant.findById(plantId)
    //     try {
    //         const Plants = await Plant.find()
    //         res.render('care.ejs', {plants: Plants})
    //     } catch(err) {
    //         console.log(err)
    //     }
    // },
}
