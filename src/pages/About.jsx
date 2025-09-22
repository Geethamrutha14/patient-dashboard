import React from 'react';
import about from '../assets/about.jpg';

export default function About() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div>
        <img
          src={about}
          alt="About Hospital"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-3xl font-bold text-slate-500 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Jarurat Care Hospital has been serving the community with world-class 
          healthcare facilities for over a decade. We are dedicated to delivering 
          patient-centered care with compassion and innovation.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our team of experienced doctors, nurses, and healthcare professionals 
          work together to ensure the best possible outcomes for our patients.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We offer a wide range of medical services including emergency care, 
          specialized treatments, and preventive health check-ups.
        </p>
      </div>
    </section>
  );
}
