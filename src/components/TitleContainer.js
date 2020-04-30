import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function ImagesGrid() {
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
