const express = require('express');
const {validateList}=require('../middlewares/listMiddleware');
const listController = require('../controllers/listController'); 
const router = express.Router();
//create a new list
router.post('/lists',validateList, listController.createList);
// Get all lists
router.get('/lists',authenticateToken, listController.getAllLists);
// Get a specific list by ID
router.get('/lists/:id', listController.getListById);

// Update a list by ID
router.put('/lists/:id', listController.updateListById);

// Delete a list by ID
router.delete('/lists/:id', listController.deleteListById);

module.exports = router;