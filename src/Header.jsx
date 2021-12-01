import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            componnerat="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Link to="/">Ramazon</Link>
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <IconButton size="large" edge="end" color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
