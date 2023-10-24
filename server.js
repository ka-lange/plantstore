const express = require('express')
const app = express()
// var path = require('path');
// const connectDB = require('./config/database')
const mongoose = require('mongoose')
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DB_STRING);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

//page routes
const mainRoutes = require('./routes/main')
const shopRoutes = require('./routes/shop')
const referenceRoutes = require('./routes/reference')
const adminRoutes = require('./routes/admin')
const cartRoutes = require('./routes/cart')

require('dotenv').config({path: './config/.env'})

// connectDB()  //initialize connecting the server to the database via config/database file

app.set('view engine', 'ejs')
// app.set('views',path.join(__dirname+'/views/'));

app.use("/public", express.static('./public/'));
app.use("/scss", express.static('./scss/'));
app.use(express.static(__dirname + '/public'));

// app.use("/js", express.static('./js/'));
app.use('/PlantPhotos', express.static('PlantPhotos'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/reference', referenceRoutes)
app.use('/admin', adminRoutes)
app.use('/cart', cartRoutes)

    
// app.listen(process.env.PORT, ()=>{
//     console.log('Server is running, you better catch it!')
// })  

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("listening for requests");
    })
})