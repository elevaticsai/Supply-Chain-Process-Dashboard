import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900">Project Name: Super Widget</h1>
        <p className="text-gray-600">NPI Phase: Concept</p>
        <p className="text-gray-600">Timeline: April 2023 - December 2023</p>
      </div>
      <div className="mt-4 md:mt-0">
        <h2 className="text-xl font-semibold text-gray-900">Key Metrics Summary</h2>
        <div className="flex space-x-4">
          <div>
            <p className="text-gray-600">Total Budget: $200,000</p>
            <p className="text-gray-600">Actual Spend: $100,000</p>
            <p className="text-gray-600">Remaining Budget: $100,000</p>
            <p className="text-gray-600">Projected Completion Date: December 2023</p>
          </div>
        </div>
      </div>
    </header>
  );
};