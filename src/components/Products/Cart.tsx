import { ProductCardProps } from '@/Types/Products'
import { CartContext } from '@/utils/context/CartContext'
import { useContext } from 'react'
import { CardCart } from '../Card/CardCart'

export function CartItems() {
  const { cartItems } = useContext(CartContext)

  return (
    <>
      {cartItems?.map((product: ProductCardProps, index) => (
        <CardCart
          key={index}
          id={product.id}
          title={product.title}
          price={product.price}
          src={product.src}
        />
      ))}
    </>
  )
}