import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div >
      <header className='flex flex-row items-center justify-between p-6 shadow-md bg-slate-200'>
        <Link to='/'>
            <div className="logo flex items-center">
                <span className='text-2xl text-slate-400 font-bold'>Jarurat</span>
                <span className='text-2xl text-slate-500 font-bold'>Care</span>
            </div>
        </Link>
        <nav>
            <ul className='flex flex-row space-x-8 text-slate-600 font-medium'>
                <li>
                    <Link to='/' className='hover:text-blue-500 cursor-pointer'>Home</Link>
                </li>
                <li>
                   <Link to='/about' className='hover:text-blue-500 cursor-pointer'>About</Link>
                </li>
                <li>
                    <Link to='/patients' className='hover:text-blue-500 cursor-pointer'>Patients</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
