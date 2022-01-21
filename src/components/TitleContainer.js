import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function TitleContainer() {
  return (
    <Container>
      <Typography variant="h5" align="center" color="textPrimary">
        It's Calder, but on the Web!
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary">
        Javascript developer native to Atlanta, GA
      </Typography>
    </Container>
  );
}
