const express = require('express')
const app = express()
const connectDB = require('./config/database')




//page routes
const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')
const shopRoutes = require('./routes/shop')
const careRoutes = require('./routes/care')
const referenceRoutes = require('./routes/reference')
const adminRoutes = require('./routes/admin')
const cartRoutes = require('./routes/cart')

require('dotenv').config({path: './config/.env'})

connectDB()  //initialize connecting the server to the database via config/database file

app.set('view engine', 'ejs')

app.use("/public", express.static('./public/'));
app.use("/scss", express.static('./scss/'));
app.use(express.static(__dirname + '/public'));

// app.use("/js", express.static('./js/'));
app.use('/PlantPhotos', express.static('PlantPhotos'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/shop', shopRoutes)
app.use('/care', careRoutes)
app.use('/reference', referenceRoutes)
app.use('/admin', adminRoutes)
app.use('/cart', cartRoutes)

    
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})  


// app.get('/', (req, res)=> {
//     res.sendFile(__dirname + '/index.html')
// })

// do this for all pages - see if you can factor it to be one request
// app.get('/:pageName', (req, res)=> {
//     const pageName = req.params.pageName;
//     if (pageName) { //check to see if frogName exists and returns it's json if it does
//         res.sendFile(__dirname + `/${pageName}.html`) //will need to update the file extension name to include ejs???
//     }
// })

// MongoClient.connect(connectionString, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('adminPlantEntry')
//     const plantsCollection = db.collection('plants')

//     app.use(bodyParser.urlencoded({ extended: true }))
    
//     app.get('/', (req, res) => {
//         db.collection('plants')
//             .find()
//             .toArray()
//             .then(results => {
//             console.log(results)
//         })
//         .catch(error => console.error(error))
//         res.sendFile(__dirname + '/adminPlantEntry.html')
        
//     })
//     // new section: attempt to connect to ejs care sheet template
//     app.get('/CareSheet', (req, res) => {
//         plantsCollection.find().toArray()
//             .then(results => {
//                 console.log(results)
//                 res.render('CareSheet.ejs', { plants: results })
//             })
//             .catch(error => console.error(error))
        
//     })

//     app.post('/plants', (req, res) => {
//         plantsCollection
//             .insertOne(req.body)
//             .then(result => {
//                 res.redirect('/adminPlantEntry')
//             })
//             .catch(error => console.error(error))
//     })









