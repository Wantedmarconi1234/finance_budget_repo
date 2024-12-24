import { useEffect, useState } from "react";

export default function useEditExpense() {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const editExpense = async ({ name, description, amount, date, category }, id) => {
    setIsLoading(true);
    setIsError(null);

    try {
      const response = await fetch(`http://localhost:3003/app/endpoints/expense/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, amount, date, category }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(json.error || "Failed to create expense");
      }

      setIsLoading(false);
      return json; // Return the created expense data
      
    } catch (error) {
      setIsError(json.error || "Something went wrong");
      setIsLoading(false);
      return null; // Return null in case of an error
    }
  };

  return { editExpense, isError, isLoading };
}
