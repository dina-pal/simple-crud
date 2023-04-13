require('dotenv').config();
const mongoose = require('mongoose');
const dbUrl = process.env.MONGO_URI.replace('<DATABASE_NAME>',process.env.DATABASE_NAME );

module.exports.connectDB = () =>{
    mongoose.connect(dbUrl)
    .then(() =>{
        console.log('database is connected');
    })
    .catch(err => console.log(err))
}