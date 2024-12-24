import React, { useEffect, useState } from 'react'

export default function useAllExpenses() {
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [expenses, setExpenses] = useState(null)

    const getAllExpenses = async () => {
        setIsError(null)
        setIsLoading(true)

        try {
            const response = await fetch("http://localhost:3003/app/endpoints/expenses")
            const data = await response.json()
            
            //throw error when fetching fails
            if (!response.ok) {
                setIsLoading
                throw new Error("Failed to fetch expenses")
            }

            //set data in Expenses
            if (response.ok) {
                setExpenses(data)
                setIsLoading(false)
            }

        } catch (error) {
            setIsError(error)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getAllExpenses()
    },[])

  return {isError, isLoading, expenses}
}
