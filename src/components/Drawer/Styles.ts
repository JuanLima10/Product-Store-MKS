'use client'
import { Box, Button, IconButton, styled } from '@mui/material'

export const CartDrawerContainer = styled(Box)(() => ({
  width: '486px',
  height: '100%',
  overflowY: 'auto',
  maxWidth: '100vw',
  background: '#0F52BA'
}))

export const CartDrawerHeader = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '36px 22px 0 47px'
}))

export const CartDrawerContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '22px',
  padding: '40px 32px 200px'
}))

export const CartDrawerCloseButton = styled(IconButton)(() => ({
  color: '#FFFFFF',
  background: '#000000',
  '&:hover': { 
    color: '#000000',
    background: '#FFFFFF'
  }
}))

export const CartDrawerBuyButton = styled(Button)(() => ({
  height: 97,
  fontSize: '28px',
  borderRadius: 0,
  color: '#FFFFFF',
  background: '#000000',
  '&:hover': { 
    color: '#000000',
    background: '#FFFFFF'
  }
}))

export const CartDrawerFooter = styled(Box)(() => ({
  display: 'flex',
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'linear-gradient(0deg, #0F52BA 90%, transparent)',
  padding: '32px 47px 32px 64px'
}))