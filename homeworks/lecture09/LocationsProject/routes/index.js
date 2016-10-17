var express = require('express');
var router = express.Router();

/* GET index page*/
router.get('/', function(req, res, next) {

  res.render('index', { title:'Index'}, function(err, html){
    if(err)
      throw err;
    res.end(html);
  });
});

module.exports = router;
