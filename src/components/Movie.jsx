import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Movie({ title, poster_path, vote_average, props}) {
    const navigate=useNavigate();
    const onClickImg = () => {
    navigate(`/movie/${props.title}`, { state:props})
};
    return (
        <>
        <div className="Container" onClick={onClickImg}>
            <div className="Contents">
                <img className="img" src={poster_path} alt="영화포스터" />
                <div className="Text">
                    <div className="Title">{title}</div>
                    <div className="VoteAverage">{vote_average}</div>
                </div>
            </div>
        </div>
        
        </>
    );
}