var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
//const authenticateToken = require('../middlewares/authMiddleware');


router.post('/user',userController.registerUser);//Route for registeruser
router.post('/login',userController.loginUser);//route for loginuser
// Get user profile (You can add authentication middleware here if needed)
router.get('/user/:id', userController.getUserProfile);
// Update user profile (You can add authentication middleware here if needed)
router.put('/user/:id', userController.updateUserProfile);

//router.get('/User',userController.loginUser);//Route for create task
//router.post('/User',.registerUser);//Route for create task
//router.post('/User',userController.registerUser);//Route for create task


module.exports = router;
