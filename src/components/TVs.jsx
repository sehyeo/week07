import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TVs({ name, poster_path, vote_average, props}) {
    return (
        <div className="Container">
            <div className="Contents">
                <img className="img" src={poster_path} alt="tv프로그램" />
                <div className="Text">
                    <div className="Title">{name}</div>
                    <div className="VoteAverage">{vote_average}</div>
                </div>
            </div>
        </div>
    );
}