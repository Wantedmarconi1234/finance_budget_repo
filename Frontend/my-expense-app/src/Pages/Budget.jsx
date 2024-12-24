import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Budget() {
  return (
    <div className='bg-white shadow-md h-full text-3xl font-bold p-3'>
      Budget
      <Outlet />
    </div>
  )
}
