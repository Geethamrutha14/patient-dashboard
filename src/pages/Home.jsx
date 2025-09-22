import React from 'react';
import { HeartPulse, Stethoscope, Ambulance } from "lucide-react"; // icons
import group from '../assets/group.jpg'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-20 gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6">
            Welcome to <span className='text-slate-400'>Jarurat</span><span className="text-slate-500">Care </span>Hospital
          </h2>
          <p className="max-w-xl text-lg text-gray-600 mb-8">
            Compassionate healthcare with advanced facilities. Your health, our priority.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          onClick={()=> navigate('/add-person')}>
            Book an Appointment
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={group}
            alt="Hospital Team"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
            <HeartPulse className="mx-auto text-blue-600 w-12 h-12 mb-4" />
            <h3 className="font-semibold text-xl">Emergency Care</h3>
            <p className="text-gray-600 mt-2">24/7 emergency services with quick response.</p>
          </div>

          <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
            <Stethoscope className="mx-auto text-blue-600 w-12 h-12 mb-4" />
            <h3 className="font-semibold text-xl">Expert Doctors</h3>
            <p className="text-gray-600 mt-2">Skilled doctors dedicated to your well-being.</p>
          </div>

          <div className="p-6 shadow rounded-xl hover:shadow-lg transition">
            <Ambulance className="mx-auto text-blue-600 w-12 h-12 mb-4" />
            <h3 className="font-semibold text-xl">Ambulance</h3>
            <p className="text-gray-600 mt-2">Fast ambulance services across the city.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
