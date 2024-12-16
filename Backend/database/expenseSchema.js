const mongoose = require('mongoose');

// Expense Schema
const expenseSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
        enum: ['Food', 'Transportation', 'Rent', 'Utilities', 'Entertainment', 'Others'], // Example categories
    },
    description: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Models
module.exports = mongoose.model('Expense', expenseSchema);
