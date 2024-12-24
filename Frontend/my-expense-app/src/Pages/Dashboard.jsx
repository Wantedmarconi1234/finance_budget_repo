import { Outlet } from 'react-router-dom'
import {useBudgetData} from '../hooks/useBudgetData'
import { ChartsNav } from '../components/ChartsNav'

export default function Dashboard() {
  const {isLoading, isError, budgetData} = useBudgetData()
  console.log(budgetData[0])
  return (
    <div className='bg-white shadow-md h-full text-3xl font-bold p-3'>
      <h1>Dashboard</h1>
      <ChartsNav />
      <Outlet />
    </div>
  )
}
