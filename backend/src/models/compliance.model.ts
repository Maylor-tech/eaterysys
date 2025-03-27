import { BaseModel, AuditFields } from '../types/common';

export interface ComplianceTask extends BaseModel, AuditFields {
  title: string;
  description: string;
  category: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  priority: 'low' | 'medium' | 'high' | 'critical';
  due_date: Date;
  completed_date?: Date;
  status: 'pending' | 'in_progress' | 'completed' | 'overdue';
  assigned_to: string;
  evidence_required: boolean;
  attachments?: string[]; // URLs to attached files
}

export interface Inspection extends BaseModel, AuditFields {
  type: string;
  inspector: string;
  date: Date;
  score?: number;
  status: 'scheduled' | 'in_progress' | 'completed' | 'failed';
  findings: {
    category: string;
    description: string;
    severity: 'minor' | 'major' | 'critical';
    action_required: string;
    due_date: Date;
  }[];
  attachments?: string[]; // URLs to attached files
}

export interface ComplianceDocument extends BaseModel, AuditFields {
  title: string;
  type: string;
  category: string;
  expiry_date?: Date;
  status: 'active' | 'expired' | 'pending_renewal';
  document_url: string;
  version: string;
  notes?: string;
}

export interface ComplianceViolation extends BaseModel, AuditFields {
  type: string;
  description: string;
  severity: 'minor' | 'major' | 'critical';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  due_date: Date;
  resolution_date?: Date;
  resolution_notes?: string;
  attachments?: string[]; // URLs to attached files
} 