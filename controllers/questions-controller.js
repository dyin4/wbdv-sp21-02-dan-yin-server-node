//Controller deals with all things HTTP
//sits between two worlds: the HTTP world ad the JS world
module.exports = (app) => {
  const questionsService = require('../services/questions/questions-service')
  //req, res allows participating in client/server
  const findAllQuestions = (req, res) => {
    questionsService.findAllQuestions()
    .then((questions) => {
      res.json(questions)
    })
  }
  const findQuestionsForQuiz = (req, res) => {
    const qid = req.params['qzid']
    questionsService.findQuestionsForQuiz(qid).then((questions) => {
      res.json(questions)
    })

  }
  app.get('/api/questions', findAllQuestions)
  app.get('/api/quizzes/:qzid/questions', findQuestionsForQuiz)
}