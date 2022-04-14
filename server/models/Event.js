const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    event_title: {
        type: String,
        required: true
    },
    event_description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    report: {
        type: String
    },
    register_url: {
        type: String
    },
    event_date: {
        type: Date,
        required: true
    },
})

module.exports = mongoose.model('event', eventSchema);