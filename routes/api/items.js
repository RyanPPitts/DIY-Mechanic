const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// Item Model
const Item = require('../../models/Item');

// Create routes 
// @route GET api/items
// @description Get all items
// @access Public

router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items));
});


// @route POST api/items
// @description Create a POST
// @access Private

router.post('/', auth, (req, res) => {
   const newItem = new Item({
       name: req.body.name,
       description: req.body.description,
        cost: req.body.cost,
        due_date: req.body.due_date
   });
    newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@description Delete a Item
// @acccess Public

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;

