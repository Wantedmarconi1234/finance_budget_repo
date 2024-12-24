import React from "react";
import { NavLink } from "react-router-dom";
import useAllExpenses from "../hooks/useAllExpenses";
import { FaEye } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";

export default function AllExpenses() {
  const { isError, isLoading, expenses } = useAllExpenses();

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this expense?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3003/app/endpoints/expense/${id}`, {
        method: "DELETE",
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error("Failed to delete expense");
      }

      if (response.ok) {
        alert("Expense deleted successfully.");
        window.location.reload();
        return json;
      }

    } catch (err) {
      alert("Error deleting expense. Please try again.");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading expenses.</p>;
  }

  return (
    <div>
      {expenses?.map((expense) => (
        <div
          key={expense._id}
          className="flex justify-between cursor-pointer hover:bg-slate-100 bg-slate-200 my-2 shadow-md p-5 overflow-auto rounded-md"
        >
          <div>
            <h1 className="text-base">{expense.description}</h1>
          </div>
          <div className="flex items-center">
            <NavLink
              to={`/expenses/detail/${expense._id}`}
              className="cursor-pointer hover:text-red-400"
            >
              <FaEye size={15} />
            </NavLink>
            <NavLink
              className="cursor-pointer mx-5 hover:text-red-400"
              to={`/expenses/edit/${expense._id}`}>
              <LuPencil size={15} />
            </NavLink>
            <div
              className="cursor-pointer hover:text-red-400"
              onClick={() => handleDelete(expense._id)}
            >
              <IoTrashBinOutline size={15} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
