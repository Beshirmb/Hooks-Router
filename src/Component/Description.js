import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';




const Description = ({movieData}) => {


  let params = useParams();
  let navigate = useNavigate();
  const movie = movieData.find(el => el.id = params.id);
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