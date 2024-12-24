import { useState } from "react";

export default function useCreateBudget() {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createBudget = async ({ name, description, monthlyLimit, category }) => {
    setIsLoading(true);
    setIsError(null);

    try {
      const response = await fetch("http://localhost:3002/app/endpoints/budgets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, monthlyLimit, category }),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || "Failed to create budget");
      }

      setIsLoading(false);
      return json; // Return the created budget data

    } catch (error) {
      
      setIsError({ message: error.message });
      setIsLoading(false);
      return null; // Return null in case of an error
    }
  };

  return { isError, isLoading, createBudget };
}
