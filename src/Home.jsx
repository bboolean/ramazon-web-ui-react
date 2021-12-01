import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Header from './Header';
import ImageList from './ImageList';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />

      <Container maxWidth="md">
        <div className="center">
          <Typography variant="h3" component="div" gutterBottom>
            Your one-stop shop to buying all sorts of stuff
          </Typography>

          <p>
            <TextField
              label="Find something nice..."
              type="search"
              variant="outlined"
            />
          </p>
          <Button variant="contained">Search</Button>
        </div>

        <ImageList />
      </Container>
      <div className="spacer" />
    </Box>
  );
}
