import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Line from './Line';

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
