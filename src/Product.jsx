import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

export const logo = new URL(
  '../public/demo-product.jpg?width=256',
  import.meta.url
);

const dots = (i) => (i ? i : '...');

export default function Product() {
  const path = useSelector((state) => state?.path ?? []);
  const _id = path?.[1] ?? '';

  const product = useSelector((state) => state?.product ?? {});

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Container maxWidth="md" sx={{ mt: { xs: 6, sm: 12 } }}>
        <Box
          sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}
        >
          <Box sx={{ textAlign: 'center' }}>
            {product?.image ? (
              <div
                style={{
                  width: 256,
                  height: 256,
                  borderRadius: '10px',
                  backgroundImage: `url('https://ramazon-product-image.s3.us-east-1.amazonaws.com/product-images-v0/${product?.image}')`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  margin: 'auto',
                }}
              >
                <div style={{ width: 256 }}></div>
              </div>
            ) : (
              <div
                style={{
                  height: 256,
                  width: 256,
                  borderRadius: '10px',
                  background: '#f5f5f5',
                  margin: 'auto',
                }}
              ></div>
            )}
          </Box>
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
