import { Card, Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

const testimonialData = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae adipisci, voluptatem eum obcaecati aliquid? Excepturi obcaecati voluptas dicta iste vitae sint aliquid unde sed, aperiam et porro beatae quo!',
    author: 'Some guy',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae adipisci, voluptatem eum obcaecati aliquid? Excepturi obcaecati voluptas dicta iste vitae sint aliquid unde sed, aperiam et porro beatae quo!',
    author: 'Some other guy',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae adipisci, voluptatem eum obcaecati aliquid? Excepturi obcaecati voluptas dicta iste vitae sint aliquid unde sed, aperiam et porro beatae quo!',
    author: 'A third guy',
  },
];

const carouselOptions = {
  fullHeightHover: false,
  swipe: false,
  duration: 500,
  interval: 8000,
  animation: 'slide',
};

const Testimonials = () => {
  // Handle window change to manually show or hide carousel button
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const navButtonsWrapperProps = {
    sx: {
      bottom: '50%',
      top: 'unset',
      display: `${windowSize > 690 ? 'inline' : 'none'}`,
    },
  };

  const navButtonProps = {
    style: {
      backgroundColor: 'cornflowerblue',
    },
  };

  return (
    <Container sx={{ textAlign: 'center', width: '700px' }}>
      <Typography component='h3' variant='h4' sx={{ p: 2 }}>
        Testimonials
      </Typography>
      <Box>
        <Carousel navButtonsProps={navButtonProps} navButtonsWrapperProps={navButtonsWrapperProps} {...carouselOptions}>
          {testimonialData.map((item, index) => (
            <Card key={`${item.author}: ${index}`} sx={{ width: '500px', maxWidth: '95%', marginInline: 'auto' }}>
              <Typography sx={{ mb: 1 }} component='p'>
                <em>{item.quote}</em>
              </Typography>
              <Typography>-- {item.author}</Typography>
            </Card>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default Testimonials;
