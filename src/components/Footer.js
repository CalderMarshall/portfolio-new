import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Footer() {
  return (
    <Container>
    <Typography
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
      variant="subtitle2"
      color="textSecondary"
      component="p"
    >
      Made with{' '}
      <FavoriteIcon color="error" style={{ margin: '-2px 5px' }} />
      in Smyrna, GA.
    </Typography>
  </Container>
  );
}
