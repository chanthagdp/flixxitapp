const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  createDate: Date.now
});

module.exports = mongoose.model('Admin', adminSchema);