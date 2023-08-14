import React from 'react'
import Template from "./Template"
const Login =( {setIsLoggedIn} )=> {
  return (
    <Template
    title="Welcome Back"
    des1="Build Skills for today,tommorrow, and beyond."
    des2="education to  future-proof your career"
    image={cd}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}

    />
  )
}

export default Login