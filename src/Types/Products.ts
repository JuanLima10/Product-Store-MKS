import { ReactNode } from 'react';

export interface ProductDataProps {
  id: number;
  name: string;
  brand: string;
  photo: string;
  price: number;
  description: string;
  createdAt: string;
  udpdatedAt: string;
}

export interface ProductCardProps {
  id: number;
  src: string;
  title: string;
  price: number;
  quantity?: number;
  children?: ReactNode;
}
