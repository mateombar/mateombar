import React from 'react';
import './App.scss';

import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </main>
    </>
  );
}

export default App;
