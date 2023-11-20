import React from "react";
import {useLocation, useParams} from 'react-router-dom';
import '../Movie';

export default function MovieDetail() {
    const{state}=useLocation();
    return (
        <div className="detail-page-container">
            <div>
                <img src={state.poster_path} />
            </div>
            <div>
                <h1> {state.title} </h1>
                <p> {state.overview} </p>
            </div>
        </div>
    )
}