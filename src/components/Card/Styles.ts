'use client'
import { Box, Button, Card, Typography, styled } from '@mui/material'

export const ProductCard = styled(Card)(() => ({
  cursor: 'pointer',
  position: 'relative',
  maxWidth: '220px',
  borderRadius: '8px'
}))

export const ProductTextContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '12px',
  marginBottom: '8px'
}))

export const ProductPrice = styled(Typography)(() => ({
  color: 'white',
  backgroundColor: '#373737',
  borderRadius: '5px',
  padding: '4px',
  marginLeft: '2px'
}))

export const ProductButton = styled(Button)(() => ({
  position: 'absolute',
  bottom: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0
}))

export const CartProductCard = styled(Card)(() => ({
  position: 'relative',
  width: '100%', 
  minHeight: '95px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between',
  borderRadius: '8px', 
  paddingLeft: '16px', 
  paddingRight: '31px'
}))