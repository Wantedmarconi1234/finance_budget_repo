import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaLongArrowAltLeft } from "react-icons/fa";


export default function ExpenseDetail() {
  const [expense, setExpense] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:3003/app/endpoints/expense/${id}`)
    .then(res => res.json())
    .then(data => setExpense(data))
  }, [])


  return (
    <div className='container mx-auto p-4'>
      <Link to='/expenses/all' className='text-blue-400 text-base'><FaLongArrowAltLeft size={35} color='black'/></Link>
      {expense ? 
        <div className='shadow-md rounded-lg p-6 mt-5 bg-slate-100'>
          <h1 className='text-2xl text-green-400 font-bold mb-4'>{expense.description}</h1>
          <p className='text-lg mb-2'><span className='font-semibold'>Amount:</span> ${expense.amount}</p>
          <p className='text-lg mb-2'><span className='font-semibold'>Category:</span> {expense.category}</p>
          <p className='text-lg mb-2'><span className='font-semibold'>Date:</span> {new Date(expense.date).toLocaleDateString()}</p>
        </div> :
        <p className='text-center text-base text-gray-500'>Loading...</p>
      }   
    </div>
  )
}
