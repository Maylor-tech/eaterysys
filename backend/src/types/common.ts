export interface BaseModel {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface AuditFields {
  created_by: string;
  updated_by: string;
}

export interface BaseResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
} 