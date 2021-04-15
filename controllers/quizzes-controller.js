//Controller deals with all things HTTP
//sits between two worlds: the HTTP world ad the JS world
module.exports = (app) => {
  const quizzesService = require('../services/quizzes/quizzes-service')
  //req, res allows participating in client/server
  const findAllQuizzes = (req, res) => {
    // const quizzes = quizzesService.findAllQuizzes()
    quizzesService.findAllQuizzes().then((quizzes) =>{
      res.send(quizzes)
    })

  }
  const findQuizById = (req,res)=> {
    // const quizId = req.params['quizId']
    // const quiz = quizzesService.findQuizById(quizId)
    // res.send(quiz)
    const quizId = req.params['quizId']
    // const quiz = quizzesService.findQuizById(quizId)
    // res.send(quiz)
    quizzesService.findQuizById(quizId)
    .then((quiz) => {
      res.send(quiz)
    })
  }


  app.get('/api/quizzes', findAllQuizzes)
  app.get('/api/quizzes/:quizId', findQuizById)
}