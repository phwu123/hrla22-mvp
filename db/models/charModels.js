const mongoose = require('mongoose');

const charSchema = mongoose.Schema({
  id_char: Number,
  name_char: String,
  desc_char: String,
  series_char: String
})

const Char = mongoose.model('Char', charSchema);

module.exports.Char = Char;