import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

export default function TitlebarImageList() {
  return (
    <ImageList>
      {itemData.map((item) => (
        <Link to={'/search?c=' + item.title}>
          <ImageListItem key={item.title}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    title: 'Animals',
    image: new URL(
      '../public/categories/animals-category.jpg',
      import.meta.url
    ),
  },
  {
    title: 'Cats',
    image: new URL('../public/categories/cats-category.jpg', import.meta.url),
  },
  {
    title: 'Dogs',
    image: new URL('../public/categories/dogs-category.jpg', import.meta.url),
  },
  {
    title: 'Buildings',
    image: new URL(
      '../public/categories/buildings-category.jpg',
      import.meta.url
    ),
  },
  {
    title: 'Art',
    image: new URL('../public/categories/art-category.jpg', import.meta.url),
  },
  {
    title: 'School',
    image: new URL('../public/categories/school-category.jpg', import.meta.url),
  },
  {
    title: 'Bikes',
    image: new URL('../public/categories/bikes-category.jpg', import.meta.url),
  },
  {
    title: 'Food',
    image: new URL('../public/categories/food-category.jpg', import.meta.url),
  },
];
