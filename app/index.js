const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();
const router = require('./router/main')(app);
const { contains } = require('jquery');
const { render, renderFile } = require('ejs');
const jszip = require('jszip');

app.set('views',__dirname+'/view');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(express.static('public'));
app.get('/bold',function(req,res){
    fs.readFile('image/bold.png',function(error,data){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end(data);
    });
});
app.listen(3000,function(){
    console.log('Server running at port 3000');
});





