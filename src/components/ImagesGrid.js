import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridItem from './GridItem';
import Container from '@material-ui/core/Container';

export default function ImagesGrid() {
  return (
    <Container style={{ padding: '0 15px' }}>
      <Typography variant="h6" paragraph align="center">
        Here's how I spend my free time!
      </Typography>
      <Grid container spacing={4}>
        <GridItem
          imageUrl={require('../static/images/beer_run.jpg')}
          title={'Talladega National Forest Skyway'}
          subtitle={'Eastern Alabama'}
        />
        <GridItem
          imageUrl={require('../static/images/cwmftf.jpg')}
          title={'Coldwater Mountain Fat Tire Festival'}
          subtitle={'Anniston, AL'}
        />
        <GridItem
          imageUrl={require('../static/images/santa_cruz.jpg')}
          title={'Bull Mountain'}
          subtitle={'Dahlonega, GA'}
        />
        <GridItem
          imageUrl={require('../static/images/harley.jpg')}
          title={'Fort Mountain'}
          subtitle={'GA-52, Chatsworth, GA'}
        />
        <GridItem
          imageUrl={require('../static/images/vail.jpg')}
          title={'Vail Ski Resort'}
          subtitle={'Vail, CO'}
        />
        <GridItem
          imageUrl={require('../static/images/bmw.jpg')}
          title={'My E61'}
          subtitle={'Atlanta, GA'}
        />
        <GridItem
          imageUrl={require('../static/images/memphis.jpg')}
          title={'Beale Street'}
          subtitle={'Memphis, TN'}
        />
        <GridItem
          imageUrl={require('../static/images/kitchen.jpg')}
          title={'Pico de Gallo'}
          subtitle={'Nashville, TN'}
        />
        <GridItem
          imageUrl={require('../static/images/red_rocks.jpg')}
          title={'Red Rocks Amphitheatre'}
          subtitle={'Morrison, CO'}
        />
      </Grid>
    </Container>
  );
}
