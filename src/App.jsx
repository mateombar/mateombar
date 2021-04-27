import React from 'react';
import './App.scss';

import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { About } from './components/About';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <About/>
      </main>
    </>
  );
}

export default App;
