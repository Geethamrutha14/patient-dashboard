import React from 'react'
import mockdata from '../data/mockdata.json'
import { useState } from 'react'

export default function Patient() {

    const [query , setQuery] = useState("");
    const [patients , setPatients] = useState(mockdata);
    const [selectedPatient , setSelectedPatient] = useState(null);
    const filteredPeople = patients.filter((patient) => 
    patient.name.toLowerCase().includes(query.toLowerCase()));

    console.log(setPatients);

  return (
    
      <div className='w-full min-h-screen flex flex-col items-center gap-6 p-6'>

        <div className='flex flex-col sm:flex-row gap-3 w-full max-w-md px-4 '>

            <input type="text" placeholder='search by patient name...' 
            className='flex-1 p-3 px-5 border-0 rounded-lg bg-slate-200 outline-gray-200'
            onChange={(e)=> setQuery(e.target.value)}
            value={query}/>

            <button className='bg-blue-500 text-white px-4 p-3 rounded-lg'
            onClick={()=> setQuery("")}>Search</button>

        </div>

       <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
          filteredPeople.length > 0 ? (
            filteredPeople.map( (data)=> (
            <div>
                <li key={data.id} className='bg-slate-200 p-3 rounded-lg shadow-md hover:cursor-pointer' >
                Name : {data.name}
                    <ol>
                        <li>Age : {data.age}</li>
                        {/* <li>Email : {data.email}</li>
                        <li>Gender : {data.gender}</li>*/}
                        {/* <li>Address : {data.address}</li> */}
                        <li>Disease : {data.disease}</li>
                    </ol>
                    <div>
                        <button 
                            className='mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-green-600'
                            onClick={()=> setSelectedPatient(data)}>
                            View Details
                        </button>
                    </div>
                </li>

                
            </div>
            
          ) )
          ) : (<p className='col-span-full text-center text-slate-500'>No Patient Found</p>)
        }
        <div className='flex items-center justify-center rounded-lg bg-slate-200 hover:bg-slate-300'>
            <p className=''>Add Patient <span className='text-2xl'>+</span></p>
        </div>
       </ul>

       {
         selectedPatient && (
            <div className='flex flex-col items-center justify-center gap-2 bg-gray-300 p-5 rounded-lg'>
                <ul>
                    <li><b>Name </b>: {selectedPatient.name}</li>
                    <li><b>Token No : </b>{selectedPatient.id}</li>
                    <li><b>Age </b>: {selectedPatient.age}</li>
                    <li><b>Email</b> : {selectedPatient.email}</li>
                    <li><b>Address</b> : {selectedPatient.address}</li>
                    <li><b>Disease</b> : {selectedPatient.disease}</li>
                </ul>
                <button onClick={()=> setSelectedPatient(null)}
                    className='bg-red-500 hover:bg-red-600 p-3 px-4 py-2 rounded-lg text-white uppercase'>
                        close</button>
            </div>
         )
       }
    </div>
    
  )
}
