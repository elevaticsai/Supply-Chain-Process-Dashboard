import React, { useState } from 'react';
import { mockExpenses } from '../data/mockData';
import { Phase } from '../types/dashboard';

export const ExpenseTracker: React.FC = () => {
  const [filteredExpenses, setFilteredExpenses] = useState(mockExpenses);

  return (
    <section className="bg-gray-50 rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Part Development Expense Tracking</h2>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Filter by part number"
          className="p-2 bg-white text-gray-900 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFilteredExpenses(mockExpenses.filter(expense => 
            expense.partNumber?.includes(e.target.value)
          ))}
        />
        <input
          type="text"
          placeholder="Filter by supplier"
          className="p-2 bg-white text-gray-900 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFilteredExpenses(mockExpenses.filter(expense => 
            expense.supplier?.includes(e.target.value)
          ))}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExpenses.map((expense, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-gray-900">{expense.category}</h3>
            <p className="text-gray-600">Phase: {expense.phase}</p>
            <p className="text-gray-600">Amount: ${expense.amount.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};