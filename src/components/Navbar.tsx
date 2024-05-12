import { AppBar, Toolbar, Typography } from '@mui/material';
import { DrawerCart } from './Drawer/DrawerCart';

export function Navbar() {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h4" fontWeight="600" sx={{ flexGrow: 1 }}>
          MKS {" "}
          <Typography variant="caption" fontSize="20px" fontWeight="400">
            Sistemas
          </Typography>
        </Typography>
        <DrawerCart/>
      </Toolbar>
    </AppBar>
  )
}