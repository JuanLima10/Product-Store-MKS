'use client'
import { Typography } from '@mui/material';

import { useProducts } from '@/hooks/useProducts';
import { ProductDataProps } from '@/Types/Products';

import { CardStore } from '../Card/CardStore';
import { CardStoreSkeleton } from '../Card/Skeleton';

export function Products() {
  const { data, status, isLoading } = useProducts()

  if (isLoading) {
    return (
      [...Array(8)].map((product, index) => (
        <CardStoreSkeleton key={index} />
      ))
    )
  }

  return (
    status === "success" ? data.products.map((product: ProductDataProps) => (
      <CardStore
        id={product.id}
        key={product.id}
        src={product.photo}
        title={product.name}
        price={product.price}
      >
        {product.description}
      </CardStore>
    )) :
      <Typography variant="h1" fontWeight={700}>
        Algo deu errado
      </Typography>
  )
}