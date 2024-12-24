import { useEffect, useState } from 'react'


export const useExpenseData = () => {
const [isLoading, setIsLoading] = useState(false)
const [ isError, setError] = useState(null)
const [expenseData, setExpenseData] = useState([])


const fetchData = async () => {
  try {
  setIsLoading(true)
  setError(null)
  const response = await fetch('http://localhost:3002/app/endpoints/expenses');
  
  const data = await response.json();

//throw error when fetch fails
  if (!response.ok) {
    throw new Error("Failed to fetch budget data")
  }

//set data in budgetData
  if (response.ok) {
    setExpenseData(data)
    setIsLoading(false)
  }
 
  } catch (error) {
    setError(error.message)
  }
}
//trigger the fetchData function
useEffect(() => {
  fetchData()
}, [])
  return {fetchData, expenseData, isLoading, isError}
}
