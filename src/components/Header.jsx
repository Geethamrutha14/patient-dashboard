import React from 'react'

export default function Header() {
  return (
    <div >
      <header className='flex flex-row items-center justify-between p-6 shadow-md bg-slate-300'>
        <div className="logo flex items-center">
            <span className='text-2xl text-slate-400 font-bold'>Jurarut</span>
            <span className='text-2xl text-slate-500 font-bold'>Care</span>
        </div>
        <nav>
            <ul className='flex flex-row space-x-8 text-slate-600 font-medium'>
                <li className='hover:text-blue-500 cursor-pointer'>Home</li>
                <li className='hover:text-blue-500 cursor-pointer'>About</li>
                <li className='hover:text-blue-500 cursor-pointer'>Patients</li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
