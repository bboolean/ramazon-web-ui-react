import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export const logo = new URL(
  '../public/demo-product.jpg?width=256',
  import.meta.url
);

const ProductBox = () => (
  <Paper elevation={4}>
    <img src={logo} style={{ borderRadius: 4 }} />
  </Paper>
);

export default function Product() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src={logo}
            style={{ height: '256px', width: '256px', borderRadius: '10px' }}
          />
          <Box sx={{ p: 3 }}>
            <Typography component="div" variant="h5">
              Jeff
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Bluejay | <span style={{ color: 'green' }}>$4.00</span>
            </Typography>
            <Rating name="read-only" value={3.4} readOnly />
            <br /> <br />
            <Button variant="contained" style={{ marginRight: 10 }}>
              Add to Cart
            </Button>{' '}
            <i>Arrive by Tue</i>
            <p>
              This is a description of how amazing this product is. You need to
              buy 100,000 of this most useful product. This is a description of
              how amazing this product is. You need to buy 100,000 of this most
              useful product. This is a description of how amazing this product
              is. You need to buy 100,000 of this most useful product. This is a
              description of how amazing this product is. You need to buy
              100,000 of this most useful product. This is a description of how
              amazing this product is. You need to buy 100,000 of this most
              useful product. This is a description of how amazing this product
              is. You need to buy 100,000 of this most useful product.
            </p>
            <p>Tags: #Animal, #Bird, #BlueJay</p>
          </Box>
        </Box>
      </Container>
      <div className="spacer" />
    </Box>
  );
}
