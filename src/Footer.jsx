import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Footer() {
  return (
    <Container
      maxWidth="xlg"
      sx={{
        bgcolor: 'primary.main',
      }}
    >
      <Container maxWidth="md" sx={{ margin: '20px', fontSize: '0.8125rem' }}>
        <Typography variant="body2" gutterBottom>
          <b> Links</b>
        </Typography>
        <Typography variant="body2" gutterBottom>
          Links
        </Typography>
        <Typography variant="body2" gutterBottom>
          Links
        </Typography>
      </Container>
    </Container>
  );
}
