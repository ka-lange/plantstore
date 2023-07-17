const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

const mongodbPassword = 'dMj1fPBHNoc9bHKV'
const connectionString = `mongodb+srv://kalange266:${mongodbPassword}@cluster0.wq94s3k.mongodb.net/?retryWrites=true&w=majority`

app.set('view engine', 'ejs')

app.use("/public", express.static('./public/'));
app.use('/PlantPhotos', express.static('PlantPhotos'))


app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

// do this for all pages - see if you can factor it to be one request
app.get('/:pageName', (req, res)=> {
    const pageName = req.params.pageName;
    if (pageName) { //check to see if frogName exists and returns it's json if it does
        res.sendFile(__dirname + `/${pageName}.html`) //will need to update the file extension name to include ejs???
    }
})

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('adminPlantEntry')
    const plantsCollection = db.collection('plants')

    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.get('/', (req, res) => {
        db.collection('plants')
            .find()
            .toArray()
            .then(results => {
            console.log(results)
        })
        .catch(error => console.error(error))
        res.sendFile(__dirname + '/adminPlantEntry.html')
        
    })
    // new section: attempt to connect to ejs care sheet template
    app.get('/CareSheet', (req, res) => {
        plantsCollection.find().toArray()
            .then(results => {
                console.log(results)
                res.render('CareSheet.ejs', { plants: results })
            })
            .catch(error => console.error(error))
        
    })

    app.post('/plants', (req, res) => {
        plantsCollection
            .insertOne(req.body)
            .then(result => {
                res.redirect('/adminPlantEntry')
            })
            .catch(error => console.error(error))
    })
    
    app.listen(3000, function () {
        console.log('listening on 3000')
    })
    
  })
  .catch(error => console.error(error))








