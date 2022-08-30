const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const userSchema = Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  usertype: {
    type: String,
    default: 'event-manager'
  }
})

const User = model('User', userSchema);

module.exports = User;