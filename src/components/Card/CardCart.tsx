import { Box, CardMedia, Typography } from '@mui/material';

import { ProductCardProps } from '@/Types/Products';
import { ButtonQtd } from '../Button/ButtonQtd';
import { ButtonRemove } from '../Button/ButtonRemove';
import { CartProductCard } from './Styles';

export function CardCart(props: ProductCardProps) {

  return (
    <CartProductCard>
      <ButtonRemove id={props.id}/>
      <Box display="flex" alignItems="center" gap="8px">
        <CardMedia
          sx={{ width: '60px' }}
          component="img"
          image={
            props.src ?
              props.src :
              "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg"
          }
          alt={props.title}
        />
        <Typography variant="subtitle2" width="100px">
          {props.title}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-start" marginX="20px">
        <Typography variant="caption" fontSize="8px" marginBottom="4px">
          Qtd:
        </Typography>
        <ButtonQtd price={props.price}/>
      </Box>

      <Typography variant="subtitle2" fontWeight="700">
        R${Math.trunc(props.price)}
      </Typography>
    </CartProductCard>
  )
}