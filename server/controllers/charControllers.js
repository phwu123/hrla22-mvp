const { Char } = require('../../db/models/charModels');
const { getCharactersBySeriesGenre } = require('../../helpers');
const { store } = require('../../helpers');
const { Series } = require('../../db/models/seriesModels');

const charCtrl = {
  get: (req, res) => {
    Series.find( req.query )
      .limit(20)
      .exec((err, data) => {
        if (err) {
          console.log('err char get /api/chars');
          res.status(404);
        } else {
          console.log('success char get /api/chars', data);
          res.status(200).send(data);
        }
      })
  },
  post: (req, res) => {
    getCharactersBySeriesGenre(req.body.genre, (err, data) => {
      if (err) {
        console.log('err getting from api ', err);
      } else {
        const series = JSON.parse(data);

        store(series, req.body.genre, (err, results) => {
          if (err) {
            return res.send(err);
          } else {
            console.log('stored data: ', results)
            res.status(201).send(results);
          }
        })
      }
    })
  }
}

module.exports.charCtrl = charCtrl;