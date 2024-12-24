import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiFileList3Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

export default function Navbar() {
  const [isExpenseDropdownOpen, setIsExpenseDropdownOpen] = useState(false);
  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false);

  const toggleExpenseDropdown = () => {
    setIsExpenseDropdownOpen((prev) => !prev);
  };

  const toggleBudgetDropdown = () => {
    setIsBudgetDropdownOpen((prev) => !prev);
  };

  return (
    <div className="h-full bg-white shadow-md p-6">
      {/* Logo */}
      <NavLink className="flex items-center justify-center my-3" to="/">
        <FaRegMoneyBill1 size={55} className="text-green-500" />
      </NavLink>

      {/* Navigation Links */}
      <div className="flex flex-col my-5 space-y-4">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-md ${
              isActive ? "bg-green-100 text-green-600" : "text-gray-600"
            }`
          }
          to="/dashboard"
        >
          <AiOutlineDashboard />
          <span>Dashboard</span>
        </NavLink>

        {/* Expenses with Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 w-full text-left rounded-md text-gray-600 hover:bg-gray-100"
            onClick={toggleExpenseDropdown}
          >
            <GiTakeMyMoney />
            <span>Expenses</span>
          </button>
          {isExpenseDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-full z-20">
              <NavLink
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm ${
                    isActive ? "bg-green-100 text-green-600" : "text-gray-600"
                  } hover:bg-gray-100`
                }
                to="expenses/all"
              >
                All Expenses
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm ${
                    isActive ? "bg-green-100 text-green-600" : "text-gray-600"
                  } hover:bg-gray-100`
                }
                to="expenses/create"
              >
                Create Expense
              </NavLink>
              {/* <NavLink
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm ${
                    isActive ? "bg-green-100 text-green-600" : "text-gray-600"
                  } hover:bg-gray-100`
                }
                to="expenses/delete"
              >
                Delete Expense
              </NavLink> */}
            </div>
          )}
        </div>

        {/* Budget with Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 w-full text-left rounded-md text-gray-600 hover:bg-gray-100"
            onClick={toggleBudgetDropdown}
          >
            <RiFileList3Fill />
            <span>Budget</span>
          </button>
          {isBudgetDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-full">
              <NavLink
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm ${
                    isActive ? "bg-green-100 text-green-600" : "text-gray-600"
                  } hover:bg-gray-100`
                }
                to="budget/create"
              >
                Create Budget
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm ${
                    isActive ? "bg-green-100 text-green-600" : "text-gray-600"
                  } hover:bg-gray-100`
                }
                to="budget/update"
              >
                Update Budget
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm ${
                    isActive ? "bg-green-100 text-green-600" : "text-gray-600"
                  } hover:bg-gray-100`
                }
                to="budget/delete"
              >
                Delete Budget
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-md ${
              isActive ? "bg-red-100 text-red-600" : "text-gray-600"
            }`
          }
          to="/"
        >
          <CiLogout />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}
