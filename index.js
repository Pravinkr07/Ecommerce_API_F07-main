// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const Port = 8000;

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(Port, function(){
    console.log(Port," : is running on Sever");
});