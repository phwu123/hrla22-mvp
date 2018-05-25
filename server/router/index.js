const { charCtrl } = require('../controllers/charControllers');
const { seriesCtrl } = require('../controllers/seriesControllers');
const router = require('express').Router();

router.route('/chars')
  .get(charCtrl.get)
  .post(charCtrl.post);
  
router.route('/series')
  .get(seriesCtrl.get)
  .post(seriesCtrl.post);

module.exports.router = router;