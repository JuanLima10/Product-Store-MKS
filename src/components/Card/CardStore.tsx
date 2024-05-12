import { CardActions, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import { ShoppingBag } from 'lucide-react';

import { ProductCardProps } from '@/Types/Products';
import { CartContext } from '@/utils/context/CartContext';
import { useContext } from 'react';
import { ProductButton, ProductCard, ProductPrice, ProductTextContent } from './Styles';

export function CardStore(props: ProductCardProps) {
  const { cartItems, setCartItems } = useContext(CartContext)
  const handleClick = () => setCartItems([...cartItems, props])

  return (
    <ProductCard onClick={handleClick}>
      <CardContent>
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height="194px"
          alt={props.title}
          image={
            props.src ?
              props.src :
              "https://lightwidget.com/wp-content/uploads/localhost-file-not-found.jpg"
          }
        />
        <ProductTextContent>
          <Typography variant="subtitle1">
            {props.title}
          </Typography>
          <ProductPrice>
            R${Math.trunc(props.price)}
          </ProductPrice>
        </ProductTextContent>
        <Tooltip title={props.children} placement="top">
          <Typography variant="body2" color="text.secondary" paddingBottom="24px">
            {props.children?.toString().substring(0, 47).concat('...')}
          </Typography>
        </Tooltip>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <ProductButton
          variant="contained"
          size="small"
          startIcon={<ShoppingBag size={16} />}
          fullWidth
          disableElevation
          onClick={handleClick}
        >
          Comprar
        </ProductButton>
      </CardActions>
    </ProductCard>
  )
}