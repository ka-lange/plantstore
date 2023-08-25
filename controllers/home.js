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
    
}