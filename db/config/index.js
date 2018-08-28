const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/animeFavoritesList';
const connection = mongoose.connect(uri, {}).then(() => {
  console.log('connected to db');
})

module.exports.connection = connection;