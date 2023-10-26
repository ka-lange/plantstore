const passport = require('passport')
const User = require('../models/User')

const getAuth = (req, res) => {
    res.render('auth')
}

const loginUser = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth',
    failureFlash: false  
}) //auth with local strat

//async b/c talking to external resource
const registerUser = async(req, res) => {
    try{
        const {username, password} = req.body; //destructuring user object
        const user = new User({username})
        await User.register(user, password) //creates user and stores in DB
        //authenticates user right after register and redirect to homepage
        passport.authenticate('local')(req, res, function(){
            res.redirect('/')
        })
    } catch(err) {
        console.log(err)
        res.redirect('/auth')
    }
}

const logoutUser = (req, res) => {
    req.logout(function(err) {
        if(err){return next(err)}
        res.redirect('/') //redirect to home after logout
    })
}

// module.exports = {
//     getAuth: async (req,res)=>{
//         // res.render('index.ejs') //renders ejs file and reponds with it
//         try{
//             // const Habits = await Habit.find()//uses variable Todo model to grab todo instances from database, mongoose automatically turns to array
//             // const itemsLeft = await Todo.countDocuments({completed: false})
//             res.render('auth.ejs')
//         }catch(err){
//             console.log(err)
//         }
//     },
// }

module.exports = {
    getAuth,
    loginUser,
    registerUser,
    logoutUser
}