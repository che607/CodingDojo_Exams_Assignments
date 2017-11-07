const authController = require( '../controllers/auth.js' )
console.log("3333333");
module.exports = function(app) {
  app.get('/index', authController.index)
    .post('/auth/login', authController.login)
    .post('/auth/register', authController.register)
    .post('/auth/productOneBid', authController.productOneBid)
    .post('/auth/productTwoBid', authController.productTwoBid)
    .post('/auth/productThreeBid', authController.productThreeBid)
    .get('/auth/currentUser', authController.currentUser)
    .get('/auth/getBids1', authController.getBids1)
    .get('/auth/getBids2', authController.getBids2)
    .get('/auth/getBids3', authController.getBids3)
    .get('/auth/startBid', authController.startBid)
    .delete('/auth/logout', authController.logout);
};
