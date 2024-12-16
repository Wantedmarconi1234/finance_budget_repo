const mongoose = require('mongoose');
const {Expense} = require('../database/models');


//get all expenses
const getAllExpenses = async (req, res) => {
    try {
        const expense = await Expense.find({}).sort({createdAt: -1})
        res.status(200).json(expense)
    } catch (error) {
        res.status(404).json({error: "Failed to fetch expenses. Please try again later"})
    }
 }

//get single expense
const getSingleExpense = async (req, res) => {
    const {id} = req.params

    //check for invalid ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "Could not get expense. Id is Invalid"})
    }
    try {
        const expense = await Expense.findById(id)
        //check for no ID
        if (!expense) {
            res.status(404).json({error: "Id not found"})
        }
        res.status(200).json(expense)
    } catch (error) {
        res.status(404).json({error: "Failed to fetch expense. Please try again later"})
    }
    }

//create a expense
const createExpense = async (req, res) => {
    const expenseData = req.body

    try {
        const expense = await Expense.create({...expenseData})
        res.status(200).json(expense)
    } catch (error) {
        res.status(404).json({error: "Could not create expense. Please try again later"})
    }
}

//update expense
const editExpense = async (req, res) => {
    const {id} = req.params
    const expenseData = req.body
    //checks for invalid ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "Could not update expense. ID is invalid"})
    }

    try {
        const expense = await Expense.findByIdAndUpdate(id, expenseData)
        //checks for no ID
        if (!expense) {
            res.status(404).json({error: "ID not found"})
        }
        res.status(200).json(expense)
    } catch (error) {
        res.status(404).json({error: "Could not update expense. Please try again later"})
    }
}


//delete expense
const deleteExpense = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "Could not delete expense. ID is invalid"})
    }

    try {
        const expense = await Expense.findByIdAndDelete(id)

        if (!expense) {
            res.status(404).json({error: "ID not found"})
        }
        res.status(200).json(expense)
    } catch (error) {
        res.status(404).json({error: "Could not delete expense. Please try again later."})
    }
}


module.exports = {
    getAllExpenses,
    getSingleExpense,
    editExpense,
    deleteExpense,
    createExpense
}


