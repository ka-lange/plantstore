const mongoose = require('mongoose')
require('dotenv').config({path: './config/.env'})
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
    //should't need this anymore with newer mongoose version
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        //   useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
