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
import { Link } from 'react-router-dom';
import Header from './Header';
import { useSelector } from 'react-redux';
import * as R from 'ramda';

export const logo = new URL(
  '../public/demo-product.jpg?width=256',
  import.meta.url
);

const ProductBox = () => (
  <Paper elevation={4}>
    <img src={logo} style={{ borderRadius: 4 }} />
  </Paper>
);

const dots = (i) => (i ? i : '...');

export default function Product() {
  const path = useSelector((state) => state?.path ?? []);
  const _id = path?.[1] ?? '';

  const product = useSelector((state) => state?.product ?? {});

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {product?.image ? (
            <img
              src={
                new URL(
                  `https://ramazon-product-image.s3.us-east-1.amazonaws.com/product-images-v0/${product?.image}`,
                  import.meta.url
                )
              }
              style={{
                height: '256px',
                width: '256px',
                borderRadius: '10px',
              }}
            />
          ) : (
            <div
              style={{
                height: 256,
                width: 256,
                borderRadius: '10px',
                background: '#f5f5f5',
              }}
            ></div>
          )}
          <Box sx={{ p: 3 }}>
            <Typography component="div" variant="h5">
              {dots(product?.title)}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Bluejay |{' '}
              <span style={{ color: 'green' }}>${dots(product?.price)}</span>
            </Typography>
            <Rating name="read-only" value={product?.stars} readOnly />
            <br /> <br />
            <Button variant="contained" style={{ marginRight: 10 }}>
              Add to Cart
            </Button>{' '}
            <i>Arrive by Tue</i>
            <p>{product?.Comment}</p>
            <p>Tags: #Animal, #Bird, #BlueJay</p>
          </Box>
        </Box>
      </Container>
      <div className="spacer" />
    </Box>
  );
}
