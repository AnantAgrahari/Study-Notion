import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
const Template = ({title,des1,des2,image,formtype,setIsLoggedIn}) => {
    
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{des1}</span>
                <span> {des2}</span>
            </p>
            {formtype==="signup"? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>
                <p>Sign Up with Google</p>
            </button>
        </div>
        <div>
            // space for image//
        </div>
    </div>
  )
}

export default Template