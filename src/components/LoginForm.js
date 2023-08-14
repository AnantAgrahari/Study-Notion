import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
const LoginForm = () => {
    const[formData,setFormData]=useState({
        email:"",password:""
    })

     function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value,
            }

        ))

        
     }
       const[showPassword,setShowPassword]=useState(false);

  return (
  <form>
    <label>
        <p>Email Address<sup>*</sup> </p>
    
    <input
    required
     type="email"
     value={formData.email}
     onChange={changeHandler}
     placeholder='enter email id'
     name="email"
    />
    </label>

    <label>
        <p>Password<sup>*</sup> </p>
    
    <input
    required
     type={showPassword ?  ("text"):("password")}
     value={formData.password}
     onChange={changeHandler}
     placeholder='enter password'
     name="password"
    />
    <span onClick={()=> setShowPassword((prev)=>!prev)}>
         {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
    </span>

     <Link to="a">
        <p>
            Forgot Password
        </p>
     </Link>

    </label>

    <button>
        Sign In
    </button>
  </form>
  )
}

export default LoginForm