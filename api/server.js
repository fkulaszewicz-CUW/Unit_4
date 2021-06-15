let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let routes = require("./routes")

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next();
});

// path to db
const dbPath = 'mongodb://localhost/2018-19_Milwaukee_BucksDB';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);

// connect to mongoDB
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});
var db = mongoose.connection;

// check DB Connection
if (!db)
    console.log("Error connecting db");
else
    console.log("DB Connected Successfully");

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Server Test'));

app.use('/database', routes)

app.listen(port, function () {
    console.log("Server on port " + port);
})