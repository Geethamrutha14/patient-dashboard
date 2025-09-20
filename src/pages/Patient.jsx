import React from 'react'
import mockdata from '../data/mockdata.json'

export default function Patient() {
  return (
    
      <div className='w-full min-h-screen flex flex-col items-center gap-6 p-6'>
     

       <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
          mockdata.map( (data)=> (
            <li key={data.id} className='bg-slate-200 p-3 rounded-lg shadow-md hover:bg-slate-300' >
              Name : {data.name}
              <ol>
                <li>Age : {data.age}</li>
                <li>Email : {data.email}</li>
                <li>Gender : {data.gender}</li>
                <li>Address : {data.address}</li>
                <li>Disease : {data.disease}</li>
              </ol>
            </li>
          ) )
        }
       </ul>
    </div>
    
  )
}
