import React from 'react'
import {TVlist} from '../../tvDummy';
import TVs from '../TVs';
import Header from "../Header";
export default function TV() {
  return (
    <div>
      <div className="app-container">
          {TVlist.results.map((tv) => {
            return (
              <TVs
                name={tv.name}
                poster_path={tv.poster_path}
                vote_average={tv.vote_average}
              />
            );
          })}
        </div>
    </div>
  );
}
