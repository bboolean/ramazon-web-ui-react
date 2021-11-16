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

export default function Footer() {
  return (
    <Container
      maxWidth="xlg"
      sx={{
        bgcolor: 'primary.main',
      }}
    >
      <Container maxWidth="md" sx={{ margin: '20px', fontSize: '0.8125rem' }}>
        <Typography variant="body2" gutterBottom>
          <b> Links</b>
        </Typography>
        <Typography variant="body2" gutterBottom>
          Links
        </Typography>
        <Typography variant="body2" gutterBottom>
          Links
        </Typography>
      </Container>
    </Container>
  );
}
