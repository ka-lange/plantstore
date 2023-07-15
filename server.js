console.log('server up')
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

const mongodbPassword = 'dMj1fPBHNoc9bHKV'
const connectionString = `mongodb+srv://kalange266:${mongodbPassword}@cluster0.wq94s3k.mongodb.net/?retryWrites=true&w=majority`



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
    
    app.post('/plants', (req, res) => {
        plantsCollection
            .insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(error => console.error(error))
    })
    
    app.listen(3000, function () {
        console.log('listening on 3000')
    })
    
  })
  .catch(error => console.error(error))








