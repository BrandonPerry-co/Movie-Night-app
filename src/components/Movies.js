import React from 'react';


const IMG_API = "https://image.tmdb.org/t/p/w1280";

//the props are passed in as the items we want to get from the api and display

const Movies = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
    <img src={IMG_API + poster_path} alt={title}/>
    <div className="movie_info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
    </div>
        
        <div className="movie_over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>
)

export default Movies;