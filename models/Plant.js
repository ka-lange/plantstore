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
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  inCart: {
    type: Boolean,
    required: true,
  },
//   quantity avilable to be sold

})

module.exports = mongoose.model('Plant', PlantSchema)
