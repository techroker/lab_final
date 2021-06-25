var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("homePage");
});

router.get('/AdminPage', function(req, res, next) {
  res.render("AdminPage");
});

router.get('/totalTeams', function(req, res, next) {
  res.render("totalTeams");
});

module.exports = router;
