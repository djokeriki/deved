import React from 'react'
import MovieList from './MovieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';
import AddMovie from './AddMovie';
import './App.css';


function App() {
  return (
    <MovieProvider>
    <div>
      <Nav />
      <MovieList />
      <AddMovie />
    </div>
    </MovieProvider>
  )
}

export default App
