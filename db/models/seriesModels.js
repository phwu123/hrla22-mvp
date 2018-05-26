const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema({
  id_series: Number,
  name_series: String,
  desc_series: String,
  image: String,
  smallImage: String,
  genre: String,
  popularity: String
})

const Series = mongoose.model('Series', seriesSchema);

module.exports.Series = Series;