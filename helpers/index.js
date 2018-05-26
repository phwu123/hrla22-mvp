const request = require('request');
const { Series } = require('../db/models/seriesModels.js')

let getCharactersBySeriesGenre = (genre, callback) => {

  let options = {
    url: 'https://kitsu.io/api/edge/anime?filter[genres]=' + genre,
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-type': 'application/vnd.api+json'
    }
  };

  request(options, (err, res, body) => {
    if (err) callback(err, null);
    console.log('requesting series from genre ', genre)
    callback(null, body)
  })

}

const store = (collectionSeries, callback) => {
  if (collectionSeries.message === 'Not Found') {
    return callback(collectionSeries, null);
  }
  console.log('collectionseries ', collectionSeries)
  const seriesInfo = collectionSeries.map(show => {
    return {
      id_series: show.id,
      name_series: show.attributes.titles.en,
      desc_series: show.attributes.synopsis
    };
  });

  const batch = Series.collection.initializeUnorderedBulkOp();
  seriesInfo.forEach(series => {
    batch
      .find({ id_series: series.id })
      .limit(25)
      .upsert()
      .replaceOne(series)
  });
  batch.execute(callback);
}

module.exports.getCharactersBySeriesGenre = getCharactersBySeriesGenre;
module.exports.store = store;