import React from 'react'
import Template from './Template';
const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    des1="Build Skills for today,tommorrow, and beyond."
    des2="education to  future-proof your career"
    // image={cd}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}

    />
  )
}

export default Signup; 