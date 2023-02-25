import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div>Full width Hero section image slideshow and text box</div>
      <div>About Trumpet Helper</div>
      <div>Pricing</div>
      <div>Testimonials</div>
      <div>Contact</div>
    </div>
  );
};

export default App;
