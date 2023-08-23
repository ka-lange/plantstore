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
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  waterReq: { 
    type: String,
    required: true,
  },
  waterNotes: { 
    type: String,
    required: false,
  },
  lightReq: { 
    type: String,
    required: true,
  },
  lightNotes: { 
    type: String,
    required: false,
  },
  toxicity: { 
    type: String,
    required: true,
  },
  toxicityNotes: { 
    type: String,
    required: false,
  },
  inCart: {
    type: Boolean,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  }
//   quantity avilable to be sold

})

module.exports = mongoose.model('Plant', PlantSchema)
