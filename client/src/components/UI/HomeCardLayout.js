import React from 'react';
import { Box, Container, Card } from '@mui/material';
import classes from './HomeCardLayout.module.css';

const HomeCardLayout = ({ children, id }) => {
  return (
    <Box id={id} sx={{ marginBlock: 5 }}>
      <Container elevation={4} component={Card} className={classes['about-container']}>
        {children}
      </Container>
    </Box>
  );
};

export default HomeCardLayout;
