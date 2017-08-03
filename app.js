var http = require('http');
var express = require('express');
var app = express();
app.use(express.static('src'));
app.listen(8000);
console.log('Server started on 8000');
app.get('/',function(req,res){
    res.sendFile(__dirname+'/src/index.html');
})