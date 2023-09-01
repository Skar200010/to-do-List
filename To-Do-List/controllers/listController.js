const List = require('../models/List');

const createList = async (req, res) => {
  try {
    const newList = new List(req.body);
    await newList.save();
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createList };