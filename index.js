const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'http://raranda.techlaunch.online',
    user: 'root',
    password: '',
    database: "tank",
    multipleStatements: true
});

mysqlConnection.connect(function(err){
    if(err){
        console.log("you have an error " + err);
    }else{
        console.log("connected");
    };
});

app.listen(8900, function(){
    console.log("server runing in port 8900")
})

app.use(express.static('public'));

app.get('/players', function(req, res){
    mysqlConnection.query('SELECT * FROM records', function(err, rows, fields){
        if(err){
            console.log('you have an error ' + err);
        }else{
            console.log(rows);
            res.send(rows); 
        };
    });
})
