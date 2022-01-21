import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function GridItem({
  imageUrl,
  title,
  subtitle,
  viewAction,
  editAction,
}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          style={{ paddingTop: '56.25%' }}
          image={imageUrl}
          title="Image title"
        />
        <CardContent style={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="subtitle2">
            {title}
          </Typography>
          <Typography variant="caption">{subtitle}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
