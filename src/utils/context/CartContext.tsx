'use client'
import { ProductCardProps } from "@/Types/Products"
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface ContextProps {
  cartItems: ProductCardProps[]
  setCartItems: Dispatch<SetStateAction<ProductCardProps[]>>
  price: number[]
  setPrice: Dispatch<SetStateAction<number[]>>
  count: number,
  total: number
}

export const CartContext = createContext<ContextProps>({
  cartItems: [],
  setCartItems: (): ProductCardProps[] => [],
  price: [],
  setPrice: (): number[] => [],
  count: 0,
  total: 0
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductCardProps[]>([])
  const [price, setPrice] = useState<number[]>([])
  const count = cartItems.length
  const prices = cartItems.map((p) => Math.trunc(p.price))
  const total = [...prices, ...price].reduce((total, num) => total + num, 0)

  const values = {
    cartItems,
    setCartItems,
    price,
    setPrice,
    count,
    total
  }

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}