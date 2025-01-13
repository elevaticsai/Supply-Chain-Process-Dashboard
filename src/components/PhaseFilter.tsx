import React from 'react';
import { Phase } from '../types/dashboard';

interface PhaseFilterProps {
  activePhase: Phase;
  onPhaseChange: (phase: Phase) => void;
}

export const PhaseFilter: React.FC<PhaseFilterProps> = ({ activePhase, onPhaseChange }) => {
  const phases: Phase[] = ['Concept', 'Prototyping', 'Pilot', 'Mass Production'];

  return (
    <div className="flex space-x-4 mb-4">
      {phases.map(phase => (
        <button
          key={phase}
          className={`px-4 py-2 rounded ${activePhase === phase ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-300'}`}
          onClick={() => onPhaseChange(phase)}
        >
          {phase}
        </button>
      ))}
    </div>
  );
};