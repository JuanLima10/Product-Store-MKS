'use client'
import { Container, styled } from '@mui/material';

export const HomeContainer = styled(Container)(() => ({
  maxWidth: '950px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '22px',
  margin: 'auto',
  paddingTop: '120px',
  paddingBottom: '32px',
}))