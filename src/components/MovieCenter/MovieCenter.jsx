import React, { useState, useEffect } from 'react'
import MovieTable from '../MovieTable/MovieTable'
import { Input } from 'antd'
import './MovieCenter.scss'

const { Search } = Input;

const API_URL = process.env.REACT_APP_API_URL;

const MovieCenter = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Pokemon');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    setSearchTerm(title); 
    localStorage.setItem('lastSearchTerm', title); 
  };

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem('lastSearchTerm');
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
      searchMovies(storedSearchTerm);
    } else {
      searchMovies(searchTerm);
    }
  }, []);


  return (
    <div className="container">
      <div className='header'>Invent Movie</div>
      <div className="search">
        <Search
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={() => searchMovies(searchTerm)}
          enterButton
        />
      </div>
      {movies?.length > 0 ? <MovieTable movies={movies} /> : <div className="empty"><h2>No Movies found</h2></div>}
    </div>
  );
};

export default MovieCenter;
