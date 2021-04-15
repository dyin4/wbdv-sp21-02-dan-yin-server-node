const mongoose = require("mongoose")

const questionSchema = require("../questions/questions-schema")

const quizzesSchema = mongoose.Schema({
  _id:String,
  title: String,
  quizzes:[{  type: String,
    ref: 'QuestionsModel'}],

}, {collection: "quizzes"})
module.exports = quizzesSchema;
