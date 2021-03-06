const path = require('path');
require('dotenv').config({path: path.resolve(__dirname+'/.env')});
const express = require('express')
const app = express()

const mongoose = require('mongoose');
console.log("Database_URL", process.env.MONGO_DB_URI);
const uri = process.env.MONGO_DB_URI
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', function(req, res) {

  // ejs render automatically looks in the views folder
  res.render("<h1>Hello World!</h1>");
});



require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)
app.listen(process.env.PORT || 4000, function() {
  console.log("server running")
})