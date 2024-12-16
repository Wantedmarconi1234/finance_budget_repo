const  {Budget}  = require('../database/models');
const mongoose = require('mongoose');

// Get all budgets
const getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find({}).sort({ createdAt: -1 });
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch budgets. Please try again later.' });
    }
};

// Get a single budget
const singleBudget = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid budget ID.' });
    }

    try {
        const budget = await Budget.findById(id);
        if (!budget) {
            return res.status(404).json({ error: 'Budget not found.' });
        }
        res.status(200).json(budget);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the budget. Please try again later.' });
    }
};

// Create a budget
const createBudget = async (req, res) => {
    const budgetData = req.body;

    try {
        const budget = await Budget.create({...budgetData});
        res.status(201).json(budget);
    } catch (error) {
        res.status(400).json({ error: error.message || 'Failed to create the budget.' });
    }
};

// Edit a budget
const editBudget = async (req, res) => {
    const { id } = req.params;
    const editedBudgetData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid budget ID.' });
    }

    try {
        const editedBudget = await Budget.findByIdAndUpdate(id, editedBudgetData);
        if (!editedBudget) {
            return res.status(404).json({ error: 'Budget not found.' });
        }
        res.status(200).json(editedBudget);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update the budget. Please try again.' });
    }
};

// Delete a budget
const deleteBudget = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid budget ID.' });
    }

    try {
        const deletedBudget = await Budget.findByIdAndDelete(id);
        if (!deletedBudget) {
            return res.status(404).json({ error: 'Budget not found.'});
        }
        res.status(200).json({ message: 'Budget deleted successfully.', deletedBudget });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the budget. Please try again.' });
    }
};

module.exports = {
    getBudgets,
    singleBudget,
    createBudget,
    editBudget,
    deleteBudget,
};
