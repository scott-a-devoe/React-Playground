// __dirname  =  /home/sdevoe/React-Playground/tic-tac-toe/server (or wherever this server file is)

const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'), null, function(){
        console.log('Date: ' + new Date() + '\nuserAgent: ' + req.headers['user-agent'] + '\n');
    });
    //res.send(path.join(__dirname, 'build', 'index.html'));
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', req.url), null);
});

//app.use(express.static(path.join(__dirname, 'build')));

const server = app.listen(3000, function() {
    console.log('listening . . .');
});