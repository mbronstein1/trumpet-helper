import React from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import { InView } from 'react-intersection-observer';
import classes from './About.module.css';

const cardContent = [
  { icon: 'Icon placeholder 1', text: 'Text 1', rootMargin: '-100px 0px' },
  { icon: 'Icon placeholder 2', text: 'Text 2', rootMargin: '-120px 0px' },
  { icon: 'Icon placeholder 3', text: 'Text 3', rootMargin: '-140px 0px' },
];

const About = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Container elevation={5} component={Card} className={classes['about-container']}>
        <Typography component='h3' variant='h4' sx={{ p: 2 }}>
          About Trumpet Helper
        </Typography>
        <hr />
        <Container>
          <Typography component='p' sx={{ p: 5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae adipisci, voluptatem eum obcaecati aliquid? Excepturi obcaecati voluptas dicta iste vitae sint
            aliquid unde sed, aperiam et porro beatae quo!
          </Typography>
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {cardContent.map((item, index) => (
            <InView key={`About-content: ${index}`} rootMargin={item.rootMargin} threshold={0} onChange={inView => console.log(inView)}>
              {({ inView, ref }) => (
                <Card ref={ref} elevation={0} sx={{ transform: `translate(${inView ? '0' : '-50px'}, ${item.translateY})`, transition: 'all 1s', opacity: `${inView ? 1 : 0}` }}>
                  <Typography>{item.icon}</Typography>
                  <Typography>{item.text}</Typography>
                </Card>
              )}
            </InView>
          ))}
        </Container>
      </Container>
    </Box>
  );
};

export default About;
