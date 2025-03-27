import { BaseModel, AuditFields } from '../types/common';

export interface MenuItem extends BaseModel, AuditFields {
  name: string;
  description: string;
  price: number;
  category: string;
  image_url?: string;
  allergens: string[];
  nutritional_info: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  is_active: boolean;
  preparation_time: number; // in minutes
}

export interface Menu extends BaseModel, AuditFields {
  name: string;
  description: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'special';
  start_date: Date;
  end_date?: Date;
  items: MenuItem[];
  is_active: boolean;
  restaurant_id: string;
}

export interface MenuCategory extends BaseModel {
  name: string;
  description?: string;
  display_order: number;
} 