import React from "react";

import './moviesList.scss'
import { RatingTypes } from '../../utils/rating';

export interface Movie {
  Title: string;
  Poster: string;
  Ratings: RatingTypes[];
  imdbID: string;
}

export interface MoviesListProps {
  movies: Movie[];
}

const MoviesList: React.FC<MoviesListProps> = (props: MoviesListProps): JSX.Element => {

  const { movies } = props;

  return (
    <section>
      {movies?.map((movie: Movie) => {
        return (
          <div key={movie.imdbID} className="card">
            <div className="poster">test</div>
            <img src={movie.Poster} />
          </div>
        )
      })}


    </section>
  )

}

export default MoviesList