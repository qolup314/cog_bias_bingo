var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('final_page', { title: 'final_page' });
});

module.exports = router;
