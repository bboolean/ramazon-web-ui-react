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
import Line from './Line';
import ImageList from './ImageList';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const logo = new URL(
  '../public/demo-product.jpg?width=128',
  import.meta.url
);

export default function Product() {
  const products = useSelector((state) => state?.products ?? []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />

      <Container maxWidth="md">
        {products.map((product) => (
          <Line product={product} />
        ))}
      </Container>
      <div className="spacer" />
    </Box>
  );
}
