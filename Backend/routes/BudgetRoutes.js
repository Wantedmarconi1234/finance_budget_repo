const express = require('express')
const { 
    getBudgets, 
    singleBudget, 
    createBudget,
    editBudget,
    deleteBudget } = require('../controllers/BudgetController')

const router = express.Router()

//get all budgets
router.get('/budgets', getBudgets)

//get a single budgets
router.get('/budget/:id', singleBudget)
 

//create a new budget
router.post('/budget', createBudget)

//edit a budget
router.put('/budget/:id', editBudget)


//delete a budget
router.delete('/budget/:id', deleteBudget)

module.exports = router