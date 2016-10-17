var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');

/* GET index page*/
router.get('/', function(req, res) {

  var urlStr = req.url;
  var pathname = url.parse(urlStr).pathname;
  var query = url.parse(urlStr).query;
  var long = querystring.parse(query).long;
  var lat = querystring.parse(query).lat;
  
  // Retrieve
  var MongoClient = require('mongodb').MongoClient;

  // Connect to the db
  MongoClient.connect("mongodb://localhost:27017/geoDb", function(err, db) {
    if(err) 
    {
      res.render('error', {title:'Error', error: err}, function(err, html){
        if(err)
          throw err;
        res.end(html);
      });
    }

    var locations = db.collection('locations');
    var cursor = locations.find({"locations":{
      "$near":{
        "$geometry":{
          "type":"Point", 
          "coordinates":[long, lat]
        }
      }
    }});
    var data = cursor.limit(3);
    console.log(data.length);
    res.render('find', {data:data}, function(err, html){
        if(err)
          throw err;
        res.end(html);
      });
  });
});

module.exports = router;
