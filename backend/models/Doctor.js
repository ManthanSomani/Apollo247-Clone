const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  location: String,
  fees: Number,
  rating: Number,
  available_slots: [String],
});

module.exports = mongoose.model('Doctor', doctorSchema);
