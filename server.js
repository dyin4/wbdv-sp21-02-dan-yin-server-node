require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose');
const uri = process.env.MONGO_DB_URI || 'mongodb+srv://dyin4:yindan77@cluster0.zyayu.mongodb.net/whiteboard-02'
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


require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)
app.listen(process.env.PORT || 4000)