import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box>
      <NavBar />
      <Hero />
      <About />
      <div>Pricing</div>
      <div>Testimonials</div>
      <div>Contact</div>
    </Box>
  );
};

export default App;
