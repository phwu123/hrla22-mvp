const mongoose = require('mongoose');
const uri = 'mongodb://localhost/animeFavoritesList';
const connection = mongoose.connect(uri, {}).then(() => {
  console.log('connected to db');
})

module.exports.connection = connection;