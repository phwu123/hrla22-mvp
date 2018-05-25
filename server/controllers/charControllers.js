const { Char } = require('../../db/models/charModels');

const charCtrl = {
  get: (req, res) => {
    Char.find({}, (err, data) => {
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
    const newChar = new Char(req.body);
    newChar.save(err => {
      if (err) {
        console.log('err char post /api/chars');
        res.status(400);
      } else {
        console.log('success char post /api/chars');
        res.status(201).send(newChar);
      }
    })
  }
}

module.exports.charCtrl = charCtrl;