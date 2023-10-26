const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose') //includes specific mongoose functions

const UserSchema = new Schema({}) //uses mongoose to handle encryption via pluggin

UserSchema.plugin(passportLocalMongoose) //mongoose builds out Schema for us
//stores in database with mongoose default setup

module.exports = mongoose.model('Users', UserSchema) //stores in a collection called Users
