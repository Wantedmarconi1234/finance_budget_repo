import { NavLink } from 'react-router-dom'

export const ChartsNav = () => {
  return (
    <div>
        <NavLink to="." className="text-sm rounded-full mx-2 bg-blue-600 py-1 px-2 font-semibold text-white">Pie</NavLink>
        <NavLink to="line-chart" className="text-sm rounded-full bg-blue-600 py-1 px-2 font-semibold text-white">Line</NavLink>
    </div>
  )
}
