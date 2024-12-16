const mongoose = require('mongoose');
const {Expense} = require('../database/models');


//get all expenses
const getAllExpenses = async (req, res) => {
    res.status(200).json({message: "get all expenses"})
 }

//get single expense
const getSingleExpense = async (req, res) => {
    res.status(200).json({message: "get an expense"})
}

//create a expense
const createExpense = async (req, res) => {
    res.status(200).json({message: "edit a expense"})
}

//update expense
const editExpense = async (req, res) => {
    res.status(200).json({message: "edit a expense"})
}


//delete expense
const deleteExpense = async (req, res) => {
    res.status(200).json({message: "delete a expense"})
}


module.exports = {
    getAllExpenses,
    getSingleExpense,
    editExpense,
    deleteExpense
}


