const { Series } = require('../../db/models/seriesModels');

const seriesCtrl = {
  get: (req, res) => {
    Series.find({}, (err, data) => {
      if (err) {
        console.log('err char get /api/chars');
        res.status(404);
      } else {
        console.log('success char get /api/chars');
        res.status(200).send(data);
      }
    })
  },
  post: (req, res) => {
    const newSeries = new Series(req.body);
    newSeries.save(err => {
      if (err) {
        console.log('err char post /api/chars');
        res.status(400);
      } else {
        console.log('success char post /api/chars');
        res.status(201).send(newSeries);
      }
    })
  }
}

module.exports.seriesCtrl = seriesCtrl;