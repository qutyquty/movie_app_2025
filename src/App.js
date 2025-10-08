import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/movie-detail" Component={Detail} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
