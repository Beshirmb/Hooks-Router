import React from 'react';
import StartRating from './StartRating';

const MovieCard = ({movie}) => {
  return (
    <div className='movieCard'>
     <p>{movie.name}</p>
     <StartRating rating={movie.rating}/>
     <img src={movie.image} alt=""/>
     <p>{movie.date}</p>
    </div>
  )
}

export default MovieCard;