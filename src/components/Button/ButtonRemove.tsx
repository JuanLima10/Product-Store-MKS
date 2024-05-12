import { CartContext } from "@/utils/context/CartContext"
import { Trash2 } from "lucide-react"
import { useContext } from "react"
import { CartRemoveButton } from "./Styles"

export function ButtonRemove({ id }: { id: number }) {
  const { cartItems, setCartItems, setPrice } = useContext(CartContext)

  const handleRemoveItems = () => {
    const updateCartItems = cartItems.filter((item) => item.id !== id)
    setCartItems(updateCartItems)
    setPrice([])
  }

  return (
    <CartRemoveButton onClick={handleRemoveItems}>
      <Trash2 size={16} />
    </CartRemoveButton>
  )
}