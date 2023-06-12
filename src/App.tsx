import React, { useEffect, useState } from 'react'
import Header from "./components/header";
import Footer from "./components/footer/Footer";
import Instructions from "./instructions";
import { getMovies } from "./services";
import { Movie } from './components/moviesList'

import MoviesList from './components/moviesList';

import "./App.css";
// Movie
// MoviesListProps

const App = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      console.log('error', error)

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Instructions />
      {loading ? (<div>loading</div>) : (<MoviesList movies={movies}/>)}
      <Footer />
    </div>
  );
};

export default App;
