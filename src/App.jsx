import React from 'react';
import './App.scss';

import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <About/>
        <Projects/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
