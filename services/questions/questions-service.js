//
// const questionsModel = require("../../models/questions/questions-model")
// const createQuestion = () => {
// }
// const createQuestionForQuiz = () => {
//
// }
// const findAllQuestions = () => {
//   return questionsModel.find()
// }
// const findQuestionsForQuiz = (qzId) => {
//   // return questions.filter((question) => {
//   //   return question.quizId === qzId
//   // })
//   return questionsModel.find({quizId: qzId})
// }
// const findQuestionById = (qId) => {
//   return questions.find((q) => {
//     return qId === q._id
//   })
// }
//
// const updateQuestion = () => {
// }
// const deleteQuestion = () => {
// }
//
// module.exports = {
//   createQuestion,
//   findAllQuestions,
//   findQuestionById,
//   deleteQuestion,
//   updateQuestion,
//   findQuestionsForQuiz,
//   createQuestionForQuiz
// }
const questionsDao = require('../../daos/questions-dao')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }