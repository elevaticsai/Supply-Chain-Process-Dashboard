import React, { useState } from 'react';
import { Phase } from '../types/dashboard';
import { mockMilestones } from '../data/mockData';

export const MilestoneTracker: React.FC = () => {
  const [activePhase, setActivePhase] = useState<Phase>('Concept');
  const phases: Phase[] = ['Concept', 'Prototyping', 'Pilot', 'Mass Production'];

  return (
    <section className="bg-gray-50 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">NPI Process Flow</h2>
      <div className="flex space-x-4 mb-4">
        {phases.map(phase => (
          <button
            key={phase}
            className={`px-4 py-2 rounded-md ${
              activePhase === phase 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => setActivePhase(phase)}
          >
            {phase}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockMilestones
          .filter(milestone => milestone.phase === activePhase)
          .map(milestone => (
            <div key={milestone.name} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.name}</h3>
              <p className="text-gray-600">Start Date: {milestone.startDate.toDateString()}</p>
              <p className="text-gray-600">End Date: {milestone.endDate.toDateString()}</p>
              <p className={`font-medium ${
                milestone.status === 'On Track' ? 'text-green-600' : 
                milestone.status === 'At Risk' ? 'text-yellow-600' : 
                'text-red-600'
              }`}>
                Status: {milestone.status}
              </p>
              <p className="text-gray-600">Notes: {milestone.notes}</p>
            </div>
          ))}
      </div>
    </section>
  );
};