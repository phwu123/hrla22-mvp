const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema({
  id_series: Number,
  name_series: String,
  desc_series: String
})

const Series = mongoose.model('Series', seriesSchema);

module.exports.Series = Series;