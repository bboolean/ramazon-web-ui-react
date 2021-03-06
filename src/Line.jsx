import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Line({ product }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', marginTop: 2 }} gutterBottom>
      <CardMedia
        component="img"
        sx={{ height: 160, width: 160 }}
        image={
          new URL(
            `https://ramazon-product-image.s3.us-east-1.amazonaws.com/product-images-v0/${product?.image}`,
            import.meta.url
          )
        }
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }} style={{ paddingBottom: 0 }}>
          <Typography component="div" variant="h5">
            <Link to={`/products/${product?._id}`} className="hover-blue">
              {product?.title}
            </Link>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Bluejay | <span style={{ color: 'green' }}>{product?.price}</span>
          </Typography>
          <Rating name="read-only" value={product?.stars} readOnly />
          <br /> <br />
          Arrive by Tue
        </CardContent>
      </Box>
    </Card>
  );
}
