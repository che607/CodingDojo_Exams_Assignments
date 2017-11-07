const authController = require( '../controllers/auth.js' )

module.exports = function(app) {
  app.get('/index', authController.index)
    .post('/auth/login', authController.login)
    .post('/auth/register', authController.register)
    .post('/auth/addQuestion', authController.addQuestion)
    .get('/auth/getQuestions', authController.getQuestions)
    .post('/auth/getQuestion', authController.getQuestion)
    .post('/auth/addAnswer', authController.addAnswer)
    .get('/auth/currentUser', authController.currentUser)
    .post('/auth/getAnswers', authController.getAnswers)
    .delete('/auth/logout', authController.logout);
};
