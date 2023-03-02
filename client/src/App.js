import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import { Box } from '@mui/material';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <Box>
      <NavBar />
      <Hero />
      <About />
      <Testimonials />
      <div>Contact</div>
    </Box>
  );
};

export default App;
