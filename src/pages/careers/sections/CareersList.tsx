import React, { useState } from 'react';
import { departments, positions } from '../data/positions';
import { JobCard } from '../components/JobCard';

export const CareersList = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredPositions = selectedDepartment === 'All'
    ? positions
    : positions.filter(position => position.department === selectedDepartment);

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setSelectedDepartment('All')}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedDepartment === 'All'
                ? 'bg-accent-neon text-background'
                : 'bg-white/5 hover:bg-white/10 text-white'
            }`}
          >
            All Departments
          </button>
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedDepartment === dept
                  ? 'bg-accent-neon text-background'
                  : 'bg-white/5 hover:bg-white/10 text-white'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredPositions.map(position => (
            <JobCard key={position.id} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
};