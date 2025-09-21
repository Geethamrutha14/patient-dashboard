import React from 'react'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Patient from './pages/Patient.jsx'
import About from './pages/About.jsx'
import AddPerson from './components/AddPerson.jsx';


export default function App() {
  return (
    <Router>
        <div className='min-h-screen bg-gray-50'>
          <Header/>  
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/patients' element={<Patient/>}/>
            <Route path='/add-person' element={<AddPerson/>}/>
          </Routes>
        </div>
    </Router>
  )
}
