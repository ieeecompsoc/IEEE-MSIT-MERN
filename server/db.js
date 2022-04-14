const mongoose = require("mongoose")
// require('dotenv').config({ path: './.env' })

const uri = 'mongodb://localhost:27017/ieee';

module.exports = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Connected to Database!')
    })
    return mongoose
}