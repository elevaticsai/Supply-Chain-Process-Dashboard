import { Milestone, Expense, Risk, Supplier, Document } from '../types/dashboard';

export const mockMilestones: Milestone[] = [
  { 
    name: 'Design Complete', 
    startDate: new Date('2023-04-01'), 
    endDate: new Date('2023-06-01'), 
    status: 'On Track', 
    phase: 'Concept', 
    notes: 'Design phase completed successfully.' 
  },
  { 
    name: 'Prototype Ready', 
    startDate: new Date('2023-06-02'), 
    endDate: new Date('2023-08-01'), 
    status: 'At Risk', 
    phase: 'Prototyping', 
    notes: 'Prototype may be delayed due to material issues.' 
  },
  { 
    name: 'Pilot Complete', 
    startDate: new Date('2023-08-02'), 
    endDate: new Date('2023-10-01'), 
    status: 'Delayed', 
    phase: 'Pilot', 
    notes: 'Pilot delayed due to supply chain issues.' 
  },
  { 
    name: 'Mass Production', 
    startDate: new Date('2023-10-02'), 
    endDate: new Date('2023-12-01'), 
    status: 'On Track', 
    phase: 'Mass Production', 
    notes: 'Preparing for mass production.' 
  }
];

export const mockExpenses: Expense[] = [
  { category: 'Material Costs', phase: 'Concept', amount: 15000 },
  { category: 'Tooling Costs', phase: 'Prototyping', amount: 25000 },
  { category: 'Labor Costs', phase: 'Pilot', amount: 35000 },
  { category: 'Testing Costs', phase: 'Mass Production', amount: 45000 }
];

export const mockRisks: Risk[] = [
  { 
    description: 'Material supply delay', 
    severity: 'High', 
    likelihood: 'Medium', 
    owner: 'Supply Chain', 
    mitigation: 'Find alternative suppliers', 
    status: 'Open' 
  },
  { 
    description: 'Design flaws', 
    severity: 'Medium', 
    likelihood: 'High', 
    owner: 'Engineering', 
    mitigation: 'Conduct thorough reviews', 
    status: 'Open' 
  }
];

export const mockSuppliers: Supplier[] = [
  { name: 'Supplier A', onTimeDeliveryRate: 95, defectRate: 2, costVariance: 10 },
  { name: 'Supplier B', onTimeDeliveryRate: 85, defectRate: 3, costVariance: 15 }
];

export const mockDocuments: Document[] = [
  { 
    id: '1', 
    name: 'Design Specifications.pdf', 
    type: 'pdf', 
    size: '2.5MB', 
    uploadDate: new Date('2024-03-01'), 
    category: 'Design' 
  },
  { 
    id: '2', 
    name: 'Quality Report Q1.xls', 
    type: 'xls', 
    size: '1.8MB', 
    uploadDate: new Date('2024-03-05'), 
    category: 'Quality' 
  },
  { 
    id: '3', 
    name: 'Production Schedule.doc', 
    type: 'doc', 
    size: '956KB', 
    uploadDate: new Date('2024-03-10'), 
    category: 'Production' 
  }
];