export type Phase = 'Concept' | 'Prototyping' | 'Pilot' | 'Mass Production';
export type Status = 'On Track' | 'At Risk' | 'Delayed';
export type DocumentType = 'pdf' | 'doc' | 'xls' | 'img';
export type DocumentCategory = 'Design' | 'Quality' | 'Production' | 'Other';
export type ExpenseCategory = 'Material Costs' | 'Tooling Costs' | 'Labor Costs' | 'Testing Costs';
export type Severity = 'Low' | 'Medium' | 'High';

export interface Milestone {
  name: string;
  startDate: Date;
  endDate: Date;
  status: Status;
  phase: Phase;
  notes: string;
}

export interface Expense {
  category: ExpenseCategory;
  phase: Phase;
  amount: number;
  partNumber?: string;
  supplier?: string;
}

export interface Risk {
  description: string;
  severity: Severity;
  likelihood: Severity;
  owner: string;
  mitigation: string;
  status: 'Open' | 'Closed';
}

export interface Supplier {
  name: string;
  onTimeDeliveryRate: number;
  defectRate: number;
  costVariance: number;
  partNumber?: string;
}

export interface Document {
  id: string;
  name: string;
  type: DocumentType;
  size: string;
  uploadDate: Date;
  category: DocumentCategory;
}