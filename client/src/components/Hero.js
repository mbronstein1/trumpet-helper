// import React, { useEffect, useState } from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import classes from './Hero.module.css';
import dorivalHero1 from '../assets/images/dorival-hero-1.jpeg';
import dorivalHero2 from '../assets/images/dorival-hero-2.jpg';
import axiomHero3 from '../assets/images/axiom-hero-3.jpg';
import Carousel from 'react-material-ui-carousel';

const slideshowImg = [dorivalHero1, dorivalHero2, axiomHero3];

const Hero = () => {
  return (
    <Box className={classes['hero-container']}>
      <Card className={classes.overlay}></Card>
      <Box className={classes.slideshow}>
        <Carousel duration={1000} interval={10000} indicators={false}>
          {slideshowImg.map((item, i) => (
            <CardMedia key={`${item}: ${i}`} component='img' alt='Image-carousel' image={item} title='Image-carousel' style={{ height: '100svh' }} />
          ))}
        </Carousel>
        <Typography variant='h3' component='h2' className={classes['slideshow-text']}>
          This is a test message
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
