const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema ({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    due_date: {
        type: Date,
        require: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema)