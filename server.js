const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const localStrategy = require('passport-local') //this is the auth strategy
// var path = require('path');
const connectDB = require('./config/database')
const mongoose = require('mongoose')
const User = require('./models/User')

// connectDB()  //initialize connecting the server to the database via config/database file

// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(process.env.DB_STRING);
//       console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//       console.log(error);
//       process.exit(1);
//     }
//   }

//middleware for local passport strategy to keep a user logged in on page reload

app.use(session({
    secret: 'this is Pothos',
    resave: false,
    saveUninitialized: false
}))
//using passport, can probably move to passport.js file
app.use(passport.initialize())
app.use(passport.session())

passport.use(new localStrategy(User.authenticate())) //use local strat to auth user

//make password storage encrypted (encrypt then unencrypt to match with DB)
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//pass current user info to all routes attached to request
app.use((req,res,next) =>{
    res.locals.currentUser = req.user
    next() //after action, move on to the next thing in the sequence
})

//page routes consts
const mainRoutes = require('./routes/main')
const authRoutes = require('./routes/auth')
const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')
const cartRoutes = require('./routes/cart')



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
app.use('/auth', authRoutes)
app.use('/shop', shopRoutes)
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