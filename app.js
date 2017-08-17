var express= require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname +'/index.html');
});
app.get('/index.js', function(req, res) {
    res.sendFile(__dirname +'/index.js');
});
app.listen('8888','localhost');