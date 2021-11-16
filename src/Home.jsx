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

const logo = new URL('../public/demo-product.jpg?width=128', import.meta.url);

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
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Ramazon
          </Typography>
        </Toolbar>
      </AppBar>

      <div
        style={{
          width: '50vw',
          marginLeft: '41vw',
          overflow: 'auto',
        }}
        className="scroll"
      >
        <Stack
          direction="row"
          style={{}}
          sx={{
            width: 128,
            height: 128,
          }}
          spacing={3}
        >
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </Stack>
      </div>

      <TextField label="Search field" type="search" variant="outlined" />

      <Button variant="contained">Hello World</Button>
    </Box>
  );
}
