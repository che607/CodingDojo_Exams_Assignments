const authController = require( '../controllers/auth.js' )

module.exports = function(app) {
  console.log("#2 1/2");
  app.get('/index', authController.index)
    .post('/auth/login', authController.login)
    .post('/auth/register', authController.register)
    .post('/auth/addQuestion', authController.addQuestion)
    .get('/auth/currentUser', authController.currentUser)
    .post('/auth/playTrivia', authController.playTrivia)
    .delete('/auth/logout', authController.logout);
};
