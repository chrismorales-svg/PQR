export type PQRType = 'petition' | 'complaint' | 'claim';

export type PQRStatus = 'pending' | 'in-progress' | 'resolved' | 'closed';

export interface PQR {
  id: string;
  type: PQRType;
  subject: string;
  description: string;
  status: PQRStatus;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
  userEmail: string;
  userName: string;
  assignedTo?: string;
}