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

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const logo = new URL('../public/cat-category.jpg', import.meta.url);

export default function TitlebarImageList() {
  return (
    <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.title}>
          <img src={logo} alt={item.title} loading="lazy" />
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
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    title: 'Animals',
  },
  {
    title: 'Cats',
  },
  {
    title: 'Dogs',
  },
  {
    title: 'Buildings',
  },
  {
    title: 'School',
  },
  {
    title: 'Art',
  },
  {
    title: 'Bikes',
  },
  {
    title: 'Food',
  },
];
