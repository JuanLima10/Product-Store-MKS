'use client'
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API}/products?page=1&rows=10&sortBy=name&orderBy=ASC`
  ).then(res => res.json())
}

export function useProducts(){
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['products-data']
  })
  
  return query
}