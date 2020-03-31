var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var apps = express();

const route = require('./routes/routes.js');
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/nodeproject');

//on connection
mongoose.connection.on('connected', function (req, res) {
    console.log('connected to the port 27017');
});

apps.use('/api', route);


apps.use(cors());

apps.use(bodyParser.json());

apps.use(express.static(path.join(__dirname, 'public')));
apps.use(express.static(path.join(__dirname, 'routes')));
apps.use(express.static(path.join(__dirname, 'models')));



const port = 3000;

apps.get('/', function (req, res) {
    res.send("I am sejal");
});

apps.listen(port, function (req, res) {
    console.log("server is started");
});