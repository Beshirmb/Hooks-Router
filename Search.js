import React from 'react';
import StartRating from "./StartRating";

const Search = ({searchRating,handleRating,handleSearch}) => {
  return (
    <div>
        <p>Our Movie App</p>
        <div>
            <input type = "text" placeholder='enter movie name' onChange={handleSearch}/>
            <StartRating rating={searchRating} handleRating={handleRating}/>
        </div>
    </div>
  )
}

export default Search;