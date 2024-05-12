import { Card, IconButton, styled } from '@mui/material';

export const CartProductQtd = styled(Card)(() => ({
  display: 'flex',
  boxShadow: 'none',
  borderRadius: '8px',
  border: '0.5px solid #BFBFBF'
}))

export const CartRemoveButton = styled(IconButton)(() => ({
  position: 'absolute', 
  top: 2, 
  right: 2,
  color: '#FF000090',
  borderRadius: '10px',
  padding: '4px', 
}))