// pages/index.js
import React, { useState, useEffect } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import DoctorCard from '../components/DoctorCard';

const HomePage = () => {
  const [specialization, setSpecialization] = useState('');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/doctors'); // Adjust if using backend
        const data = await res.json();
        setDoctors(data);
      } catch (err) {
        console.error('Error fetching doctors:', err);
      }
    };
    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doc) =>
    doc.specialization.toLowerCase().includes(specialization.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 text-center text-2xl font-bold">Apollo247 Clone</header>
      <main className="flex p-4">
        <div className="w-1/4 pr-4">
          <FilterSidebar specialization={specialization} setSpecialization={setSpecialization} />
        </div>
        <div className="w-3/4">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
