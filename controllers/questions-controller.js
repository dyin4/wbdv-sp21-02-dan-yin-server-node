//Controller deals with all things HTTP
//sits between two worlds: the HTTP world ad the JS world
module.exports = (app) => {
  const questionsService = require('../services/questions/questions-service')
  //req, res allows participating in client/server
  const findAllQuestions = (req, res) => {
    const questions = questionsService.findAllQuestions()
    res.send(questions)
  }
  const findQuestionsForQuiz = (req, res) => {
    const qid = req.params['qzid']
    const questions = questionsService.findQuestionsForQuiz(qid)
    res.send(questions)
  }
  app.get('/api/questions', findAllQuestions)
  app.get('/api/quizzes/:qzid/questions', findQuestionsForQuiz)
}