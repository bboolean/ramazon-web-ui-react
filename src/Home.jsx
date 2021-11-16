import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ImageList from './ImageList';
import Footer from './Footer';

export const logo = new URL(
  '../public/demo-product.jpg?width=128',
  import.meta.url
);

const ProductBox = () => (
  <Paper elevation={4}>
    <img src={logo} style={{ borderRadius: 4 }} />
  </Paper>
);

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            componnerat="div"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
            }}
          >
            Ramazon
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <div className="center">
          <Typography variant="h3" component="div" gutterBottom>
            Your one-stop shop to buying all sorts of stuff
          </Typography>

          <p>
            <TextField
              label="Find something nice..."
              type="search"
              variant="outlined"
            />
          </p>
          <Button variant="contained">Search</Button>
        </div>

        <ImageList />
      </Container>
      <div className="spacer" />
    </Box>
  );
}
