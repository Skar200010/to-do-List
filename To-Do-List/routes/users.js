var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');


router.post('/User',userController.registerUser);//Route for registeruser
router.post('/login',userController.loginUser);//route for loginuser

//router.get('/User',userController.loginUser);//Route for create task
//router.post('/User',.registerUser);//Route for create task
//router.post('/User',userController.registerUser);//Route for create task


module.exports = router;
