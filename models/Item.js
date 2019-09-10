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
        default: true
    },
    cost: {
        type: Number, 
        default: true
    },
    due_date: {
        type: Date, 
        default: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema)