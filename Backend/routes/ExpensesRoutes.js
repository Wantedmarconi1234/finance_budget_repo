const express = require('express')
const {
    getAllExpenses, 
    getSingleExpense,
    editExpense,
    deleteExpense,
    createExpense
} = require('../controllers/ExpenseController')

const router = express.Router()

//get all budgets
router.get('/expenses', getAllExpenses)

//get a single budgets
router.get('/expense/:id', getSingleExpense)
 

//create a new budget
router.post('/expense', createExpense)

//edit a budget
router.put('/expense/:id', editExpense)


//delete a budget
router.delete('/expense/:id', deleteExpense)

module.exports = router