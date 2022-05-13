import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
  let navigate = useNavigate();
  return (
    <div>
      
        {movies?.map((element,id)=>(
        <Link to={"/"+element.id} onClick={()=>navigate(`/${element.id}`)}><MovieCard key={id} movie={element}/>
        </Link>))}
    
    </div>
  )
}

export default MovieList ;