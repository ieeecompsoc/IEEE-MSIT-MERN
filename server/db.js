const mongoose = require("mongoose")
require('dotenv').config()

// const uri = process.env.MONGO_URI;

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/ieee';

module.exports = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connected to Database!')
    })
    return mongoose
}