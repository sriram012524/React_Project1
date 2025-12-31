import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
  let {user} = useParams()
let navigate = useNavigate();
  let handleNavigate = ()=>{
    navigate("/");
  }

  return (
    <div>Welcome {user}
    <button onClick={handleNavigate}> Move to Home </button>
    </div>
  )
}

export default Login