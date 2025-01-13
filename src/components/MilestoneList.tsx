import React from 'react';
import { Milestone, Phase } from '../types/dashboard';

interface MilestoneListProps {
  milestones: Milestone[];
  activePhase: Phase;
}

export const MilestoneList: React.FC<MilestoneListProps> = ({ milestones, activePhase }) => {
  const filteredMilestones = milestones.filter(milestone => milestone.phase === activePhase);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredMilestones.map(milestone => (
        <div key={milestone.name} className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">{milestone.name}</h3>
          <p className="text-gray-400">Start Date: {milestone.startDate.toDateString()}</p>
          <p className="text-gray-400">End Date: {milestone.endDate.toDateString()}</p>
          <p className={`text-gray-400 ${
            milestone.status === 'On Track' ? 'text-green-400' : 
            milestone.status === 'At Risk' ? 'text-yellow-400' : 
            'text-red-400'
          }`}>
            Status: {milestone.status}
          </p>
          <p className="text-gray-400">Notes: {milestone.notes}</p>
        </div>
      ))}
    </div>
  );
};