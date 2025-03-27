import { BaseModel, AuditFields } from '../types/common';

export interface Employee extends BaseModel, AuditFields {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  hourly_rate: number;
  start_date: Date;
  end_date?: Date;
  is_active: boolean;
  availability: {
    [key: string]: { // day of week
      start: string; // HH:mm format
      end: string;
    }[];
  };
  skills: string[];
}

export interface Shift extends BaseModel, AuditFields {
  employee_id: string;
  start_time: Date;
  end_time: Date;
  break_duration: number; // in minutes
  position: string;
  notes?: string;
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'no_show';
  actual_start_time?: Date;
  actual_end_time?: Date;
}

export interface Schedule extends BaseModel, AuditFields {
  week_start_date: Date;
  week_end_date: Date;
  department: string;
  shifts: Shift[];
  status: 'draft' | 'published' | 'archived';
  total_hours: number;
  total_cost: number;
} 