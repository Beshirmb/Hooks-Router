import React from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <>
    <div>ERROR 404</div>
    <button onClick={()=>navigate("/")}>
        Back
    </button>
    </>
  )
}

export default ErrorPage;