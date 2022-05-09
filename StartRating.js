import React from 'react';

const StartRating = ({rating,handleRating}) => {
  function Stars(x){
      var star=[];
      for (let i=1;i<=5;i++)
      {
          if (i<=x)
          {
            star.push(<span key={i} onClick={()=>handleRating(i)} style={{color:"gold",fontSize:'20px',cursor:"pointer"}}>✸</span>)
          }
          else
          {
            star.push(<span key={i} onClick = {()=>handleRating(i)} style={{color:"black",fontSize:'20px',cursor:"pointer"}}>✸</span>)
          }
      }
      return star;
  }
  return (
    <div>
        {Stars(rating)}
    </div>
  )
}

export default StartRating;