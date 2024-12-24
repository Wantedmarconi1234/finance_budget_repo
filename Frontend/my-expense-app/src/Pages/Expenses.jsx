import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Expenses() {
  return (
    <div className='bg-white shadow-md h-full overflow-auto text-3xl font-bold p-3'>
      Expenses
      <Outlet />
    </div>
  )
}
