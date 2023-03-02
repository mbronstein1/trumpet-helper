import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <div>About Trumpet Helper</div>
      <div>Pricing</div>
      <div>Testimonials</div>
      <div>Contact</div>
    </div>
  );
};

export default App;
