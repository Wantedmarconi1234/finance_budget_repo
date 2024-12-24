import React, { useState } from 'react'

export default function useCreateExpense() {
    const [isError, setIsError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const createExpense = async ({name, description, amount, date, category}) => {
        setIsLoading(true)
        setIsError(null)

        try {
            const response = await fetch("http://localhost:3003/app/endpoints/expense", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, description, amount, date, category})
            })

            const json = await response.json()

            if (!response.ok) {
                throw new Error(json.error)
            }

            if (response.ok) {
                setIsLoading(false)
                return json
            }
            
        } catch (error) {
            setIsError(error)
            isLoading(false)
        }
    }

  return {createExpense, isError, isLoading}
}
