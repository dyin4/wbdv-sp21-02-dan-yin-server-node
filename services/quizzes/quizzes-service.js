// const quizzes = require('./quizzes.json')
//
// const quizzesModel = require("../../models/quizzes/quizzes-model")
// const createQuiz = () => {
// }
// const findAllQuizzes = () => {
//   return quizzesModel.find()
// }
// const findQuizById = (quizId) => {
//   return quizzesModel
//   .findById(quizId)
//   .populate("quizzes")
//   .exec()
// }
//
// const updateQuiz = () => {
// }
// const deleteQuiz = () => {
// }
//
// // console.log(findAllQuizzes())
// // console.log(findQuizById('123'))
// module.exports = {
//   createQuiz,
//   findAllQuizzes,
//   findQuizById,
//   updateQuiz,
//   deleteQuiz
// }

const quizzesDao = require('../../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }