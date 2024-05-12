import { Box, CardActions, CardContent, Skeleton } from '@mui/material';
import { ShoppingBag } from 'lucide-react';

import { ProductButton, ProductCard, ProductTextContent } from './Styles';

export function CardStoreSkeleton() {
  return (
    <ProductCard sx={{ width: '220px' }}>
      <CardContent>
        <Skeleton height="194px" animation="wave" variant="rectangular" />
        <ProductTextContent>
          <Skeleton animation="wave" width="55%" height={16} />
          <Skeleton width="32%" height={26} animation="wave" variant="rectangular" sx={{
            borderRadius: '5px',
            marginLeft: '2px'
          }} />
        </ProductTextContent>
        <Box paddingBottom="24px">
          <Skeleton animation="wave" width="100%" height={16} />
          <Skeleton animation="wave" width="100%" height={16} />
          <Skeleton animation="wave" width="100%" height={16} />
        </Box>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <ProductButton
          variant="contained"
          size="small"
          startIcon={<ShoppingBag size={16} />}
          fullWidth
          disabled
        >
          Comprar
        </ProductButton>
      </CardActions>
    </ProductCard>
  )
}