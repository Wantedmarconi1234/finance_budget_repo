const mongoose = require('mongoose');


// Budget Schema
const budgetSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    monthlyLimit: {
        type: Number,
        required: true,
        min: 0,
    },
    categories: [
        {
            category: {
                type: String,
                required: true,
                enum: ['Food', 'Transportation', 'Rent', 'Utilities', 'Entertainment', 'Others'],
            },
            limit: {
                type: Number,
                min: 0,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Budget', budgetSchema);