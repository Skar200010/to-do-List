const express = require('express');
const {validateList}=require('../middlewares/listMiddleware')
const listController = require('../controllers/listController'); 
const router = express.Router();

router.post('/lists', validateList, listController.createList);

module.exports = router;