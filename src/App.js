import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCenter from './components/MovieCenter/MovieCenter';
import DetailPage from './components/DetailPage/DetailPage';
import Navbar from './components/Navbar/Navbar';
import './App.scss'; 
import './Overwrite.scss'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MovieCenter />} />
        <Route path="/detail/:imdbID" element={<DetailPage />}/>    
      </Routes>
    </Router>
  );
};

export default App;
