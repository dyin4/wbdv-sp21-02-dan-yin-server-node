const quizzes = require('./quizzes.json')
const createQuiz = () => {
}
const findAllQuizzes = () => {
  return quizzes
}
const findQuizById = (quizId) => {
  return quizzes.find((quiz) => {
    return quiz._id === quizId
  })
}

const updateQuiz = () => {
}
const deleteQuiz = () => {
}

// console.log(findAllQuizzes())
// console.log(findQuizById('123'))
module.exports = {
  createQuiz,
  findAllQuizzes,
  findQuizById,
  updateQuiz,
  deleteQuiz
}