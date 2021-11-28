import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyLogo from './components/MyLogo';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <div className="App space-y-2">
      <MyLogo />
      <NavBar />
      <About />
    </div>
  );
}

export default App;
