import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className='flex h-screen bg-slate-100'>
      {/* Sidebar: Hidden on small screens, visible on lg screens */}
      <header className='hidden md:block flex-initial h-full bg-white shadow-lg w-[20%]'>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className='flex-auto overflow-y-auto p-10'>
        <Outlet />
      </main>
    </div>
  );
}
