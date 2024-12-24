import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"

//import layouts
import MainLayout from "./Layout/MainLayout"


import Dashboard from "./Pages/Dashboard"
import Expenses from "./Pages/Expenses"
import Budget from "./Pages/Budget"
import PieChart from "./components/charts/dashboard/PieChart"
import LineChart from "./components/charts/dashboard/LineChart"
import CreateExpense from "./Pages/CreateExpense"
import DeleteExpense from "./Pages/DeleteExpense"
import EditExpense from "./Pages/EditExpense"
import CreateBudget from "./Pages/CreateBudget"
import DeleteBudget from "./Pages/DeletBudget"
import EditBudget from "./Pages/EditBudget"
import AllExpenses from "./Pages/AllExpenses"
import ExpenseDetail from "./Pages/ExpenseDetail"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route path="dashboard" element={<Dashboard />}>
      <Route index element={<PieChart />}/>
      <Route path="line-chart" element={<LineChart />}/>
    </Route>
    <Route path="expenses" element={<Expenses />}>
      <Route path="all" element={<AllExpenses />}/>
      <Route path="create" element={<CreateExpense />}/>
      <Route path="detail/:id" element={<ExpenseDetail />}/>
      <Route path="edit/:id" element={<EditExpense />}/>
    </Route>
    <Route path="budget" element={<Budget />}> 
      <Route path="create" element={<CreateBudget />}/>
      <Route path="delete" element={<DeleteBudget />}/>
      <Route path="update" element={<EditBudget />}/>
    </Route>
  </Route>
))

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
