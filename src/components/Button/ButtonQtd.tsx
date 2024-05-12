'use client'
import { Divider, IconButton, Typography } from '@mui/material';
import { Minus, Plus } from 'lucide-react';
import { useContext, useState } from 'react';

import { CartContext } from '@/utils/context/CartContext';
import { CartProductQtd } from './Styles';

export function ButtonQtd(props: { price: number, quantity?: number }) {
  const [qtd, setQtd] = useState(props.quantity ? props.quantity : 1)
  const { price, setPrice } = useContext(CartContext)

  const handleAddQtdItems = () => {
    setQtd(qtd + 1)
    setPrice([...price, Math.trunc(props.price)])
  }

  const handleRemoveQtdItems = () => {
    setQtd(qtd - 1)
    const updateCartItems = price.slice(0, -1)
    setPrice(updateCartItems)
  }

  return (
    <CartProductQtd>
      <IconButton onClick={handleRemoveQtdItems} disabled={qtd <= 1}>
        <Minus size={8} absoluteStrokeWidth />
      </IconButton>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Typography variant="overline" fontSize="10px" paddingX="7px">
        {qtd}
      </Typography>
      <Divider orientation="vertical" variant="middle" flexItem />
      <IconButton onClick={handleAddQtdItems}>
        <Plus size={8} absoluteStrokeWidth />
      </IconButton>
    </CartProductQtd>
  )
}