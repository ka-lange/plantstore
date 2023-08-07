const mongoose = require('mongoose') 

const PlantSchema = new mongoose.Schema({ 
  commonName: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inCart: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Plant', PlantSchema)
