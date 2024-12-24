import { useEffect, useState } from 'react'


export const useBudgetData = () => {
const [isLoading, setIsLoading] = useState(false)
const [ isError, setError] = useState(null)
const [budgetData, setBudgetData] = useState([])


const fetchData = async () => {
  try {
  setIsLoading(true)
  setError(null)
  const response = await fetch('http://localhost:3002/app/endpoints/budgets');
  
  const data = await response.json();

//throw error when fetch fails
  if (!response.ok) {
    throw new Error("Failed to fetch budget data")
  }

//set data in budgetData
  if (response.ok) {
    setBudgetData(data)
    setIsLoading(false)
  }
 
  } catch (error) {
    setError(error)
  }
}
//evoke the fetchData function
useEffect(() => {
  fetchData()
}, [])
  return {fetchData, budgetData, isLoading, isError}
}
