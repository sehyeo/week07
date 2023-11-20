import React from 'react'
import Movie from '../Movie';
import {movies} from "../../movieDummy";
import Header from "../Header";
export default function Movies() {
  return (
    <div>
      <div className="app-container">
          {movies.results.map((item) => {
            return (
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            );
          })}
        </div>
    </div>
  );
}
