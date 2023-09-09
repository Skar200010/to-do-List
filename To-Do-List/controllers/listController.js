const List = require('../models/List');
//create a new list
exports.createList = async (req, res) => {
  try {
    const { list_title } = req.body;
    const userId= req.body.userId;
    //const userId = req.user.userId;
    const newList = new List({ list_title, userId });
    const savedList = await
      newList.save();
    res.status(201).json(savedList);
  } catch (error) {
    res.status(500).json({ message: 'could not create list' });
  }
};
//get all the lists
exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.find({}).populate('userId');
    res.json({ count: lists.length, lists: lists });
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve lists' });
  }
};
// Get a specific list by ID
exports.getListById = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    if (list) {
      res.json(list);
    } else {
      res.status(404).json({ message: 'List not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve list' });
  }
};

// Update a list by ID
exports.updateListById = async (req, res) => {
  try {
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (updatedList) {
      res.json(updatedList);
    } else {
      res.status(404).json({ message: 'list not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not update list' });
  }
};

// Delete a list by ID
exports.deleteListById = async (req, res) => {
  try {
    const deletedList = await List.findByIdAndRemove(req.params.id);
    if (deletedList) {
      res.json({ message: 'list deleted successfully' });
    } else {
      res.status(404).json({ message: 'list not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not delete list' });
  }
};

//module.exports = { createList };