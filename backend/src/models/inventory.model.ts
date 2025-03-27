import { BaseModel, AuditFields } from '../types/common';

export interface InventoryItem extends BaseModel, AuditFields {
  name: string;
  sku: string;
  category: string;
  unit: string;
  quantity: number;
  reorder_point: number;
  optimal_quantity: number;
  price_per_unit: number;
  supplier_id: string;
  location: string;
  expiry_date?: Date;
  last_ordered_date?: Date;
}

export interface Supplier extends BaseModel, AuditFields {
  name: string;
  contact_person: string;
  email: string;
  phone: string;
  address: string;
  payment_terms: string;
  lead_time_days: number;
  is_active: boolean;
}

export interface InventoryTransaction extends BaseModel, AuditFields {
  item_id: string;
  type: 'received' | 'used' | 'waste' | 'adjustment';
  quantity: number;
  unit_price: number;
  notes?: string;
  reference_number?: string;
  transaction_date: Date;
} 