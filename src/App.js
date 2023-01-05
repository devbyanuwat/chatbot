import './App.css';
import { NavBar } from './components/navbar';
import { Home } from './pages/home';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const { input, setInput } = useEffect();
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
    </BrowserRouter>

  );
}

export default App;
