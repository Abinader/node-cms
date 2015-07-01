var express = require('express');
var fs   = require('fs');

var siteContext = require('./siteContext.js');
var news = require('./api/news.js');

var app = express();
app.use('/api/news', news);
app.get('/*', function (req, res) {
  var myContext = siteContext(req.headers.host);
  var currentPath = req.url;
  if(currentPath === '/') { currentPath = '/index.html'; }
  var filePath = './sites/' + myContext.getSiteName() + currentPath;

  fs.readFile(filePath,function(err,data) { res.end(data); });
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
