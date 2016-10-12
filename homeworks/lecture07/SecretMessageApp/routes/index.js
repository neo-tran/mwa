var express = require('express');
var router = express.Router();

/* GET index page*/
router.get('/', function(req, res, next) {

  // Retrieve
  var MongoClient = require('mongodb').MongoClient;

  // Connect to the db
  MongoClient.connect("mongodb://localhost:27017/mydb", function(err, db) {
    if(err) 
      return console.dir(err); 
    var collection = db.collection('lab1');
    
    // query on collection
    collection.findOne({}, function(err, doc){
      if(err)
        return console.dir(err);
      const crypto = require('crypto');
      const decipher = crypto.createDecipher('aes256', 'asaadsaad');

      var encrypted = doc.message;
      var decrypted = decipher.update(encrypted, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      
      res.render('index', {title:'Index', message: decrypted}, function(err, html){
        if(err)
          throw err;
        res.end(html);
      });
    });
  });
});

module.exports = router;
