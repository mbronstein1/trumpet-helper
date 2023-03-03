import React from 'react';
import { Container, Typography, Card, Grid } from '@mui/material';
import { InView } from 'react-intersection-observer';
import HomeCardLayout from './UI/HomeCardLayout';

const cardContent = [
  { icon: 'Icon placeholder 1', text: 'Text 1', rootMargin: '-100px 0px' },
  { icon: 'Icon placeholder 2', text: 'Text 2', rootMargin: '-200px 0px' },
  { icon: 'Icon placeholder 3', text: 'Text 3', rootMargin: '-300px 0px' },
];

const About = () => {
  return (
    <HomeCardLayout id='about'>
      <Typography component='h3' variant='h4' sx={{ p: 2 }}>
        About Trumpet Helper
      </Typography>
      <Container>
        <Typography component='p' sx={{ p: 5 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae adipisci, voluptatem eum obcaecati aliquid? Excepturi obcaecati voluptas dicta iste vitae sint
          aliquid unde sed, aperiam et porro beatae quo!
        </Typography>
      </Container>
      <Grid container spacing={2}>
        {cardContent.map((item, index) => (
          <InView key={`About-content: ${index}`} rootMargin={item.rootMargin} threshold={0}>
            {({ inView, ref }) => (
              <Grid item ref={ref} xs={12} sm={4} sx={{ transform: `translateX(${inView ? '0' : '-50px'})`, transition: 'all .7s', opacity: `${inView ? 1 : 0}` }}>
                <Card elevation={2}>
                  <Typography>{item.icon}</Typography>
                  <Typography>{item.text}</Typography>
                </Card>
              </Grid>
            )}
          </InView>
        ))}
      </Grid>
    </HomeCardLayout>
  );
};

export default About;
