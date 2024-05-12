'use client'
import { Box, Button, Drawer, Typography } from '@mui/material';
import { ShoppingCart, X } from 'lucide-react';

import { CartContext } from '@/utils/context/CartContext';
import { useContext, useState } from 'react';
import { CartItems } from '../Products/Cart';
import {
  CartDrawerBuyButton,
  CartDrawerCloseButton,
  CartDrawerContainer,
  CartDrawerContent,
  CartDrawerFooter,
  CartDrawerHeader
} from './Styles';

export function DrawerCart() {
  const { count, total } = useContext(CartContext)
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={toggleDrawer(true)}
        startIcon={<ShoppingCart size={18} />}
        disableElevation
      >
        <Typography variant="button" fontWeight="700">
          {count}
        </Typography>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <CartDrawerContainer role="presentation">
          <CartDrawerHeader>
            <Typography variant="h5" width="180px" fontWeight="700" color="white">
              Carrinho de compras
            </Typography>
            <CartDrawerCloseButton onClick={toggleDrawer(false)}>
              <X size={20} />
            </CartDrawerCloseButton>
          </CartDrawerHeader>

          <CartDrawerContent>
            <CartItems />
          </CartDrawerContent>

          <Box width="100%" position="absolute" bottom={0}>
            <CartDrawerFooter>
              <Typography variant="h5" fontWeight="700" color="white">
                Total:
              </Typography>
              <Typography variant="h5" fontWeight="700" color="white">
                R${total}
              </Typography>
            </CartDrawerFooter>
            <CartDrawerBuyButton variant="contained" fullWidth>
              Finalizar Compra
            </CartDrawerBuyButton>
          </Box>
        </CartDrawerContainer>
      </Drawer>
    </>
  )
}
