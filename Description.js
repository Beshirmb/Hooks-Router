import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';


const Description = () => {
  const movie = movies.find(el => el.id = params.id);

  let params = useParams();
  let navigate = useNavigate();
  return (
      <>
    <div>
      <ReactPlayer url ={movie.source}/>
    </div>
    <button onClick={()=> navigate("/")}>
     Back
    </button>
    </>
  )
}

export default Description;