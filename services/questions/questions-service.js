const questions = require('./questions.json')
const createQuestion = () => {
}
const createQuestionForQuiz = () => {

}
const findAllQuestions = () => {
  return questions
}
const findQuestionsForQuiz = (qzId) => {
  return questions.filter((question) => {
    return question.quizId === qzId
  })
}
const findQuestionById = (qId) => {
  return questions.find((q) => {
    return qId === q._id
  })
}

const updateQuestion = () => {
}
const deleteQuestion = () => {
}

module.exports = {
  createQuestion,
  findAllQuestions,
  findQuestionById,
  deleteQuestion,
  updateQuestion,
  findQuestionsForQuiz,
  createQuestionForQuiz
}