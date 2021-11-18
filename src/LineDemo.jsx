import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

export default function Line() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', marginTop: 2 }} gutterBottom>
      <CardMedia
        component="img"
        sx={{ height: 160, width: 160 }}
        image={new URL('../public/demo-product.jpg?width=256', import.meta.url)}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }} style={{ paddingBottom: 0 }}>
          <Typography component="div" variant="h5">
            <Link to="/Product/123/This-Thing" className="hover-blue">
              Jeff
            </Link>
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
          Arrive by Tue
        </CardContent>
      </Box>
    </Card>
  );
}
