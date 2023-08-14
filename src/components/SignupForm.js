import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
const SignupForm = () => {
    const[Data,setData]=useState({
        firstname:"",lastname:"", email:"",createpassword:"",confirmpassword:""
    })

    function changeHandler(event){
       setData((prevData)=>({
        ...prevData,
        [event.target.name]:event.target.value
       }))
    }

 const[showPassword,setShowPassword]=useState(false);

  return (
    <div>
        <div>
        <button>
            Student
        </button>

        <button>
           Instructor
        </button>
     </div>



     <form>
        <label>
            <p>First Name <sup>*</sup></p>
            <input
            required
            type="text"
            placeholder='Enter First Name'
            onChange={changeHandler}
            name="firstname"
            value={Data.firstname}

            />
        </label>

        <label>
            <p>Last Name <sup>*</sup></p>
            <input
            required
            type="text"
            placeholder='Enter last Name'
            onChange={changeHandler}
            name="lastname"
            value={Data.lastname}

            />
        </label>

        <label>
            <p>email address <sup>*</sup></p>
            <input
            required
            type="email"
            placeholder='Enter email address'
            onChange={changeHandler}
            name="email"
            value={Data.email}

            />
        </label>

        <label>
            <p>Create Password <sup>*</sup></p>
            <input
            required
            type={showPassword ? ("text"):("password")}
            placeholder='Enter password'
            onChange={changeHandler}
            name="createpassword"
            value={Data.createpassword}

            />
           <span onClick={()=> setShowPassword((prev)=>!prev)}>
         {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
    </span>

        </label>

        <label>
            <p>Confirm Password <sup>*</sup></p>
            <input
            required
            type={showPassword ? ("text"):("password")}
            placeholder='confirm password'
            onChange={changeHandler}
            name="confirmpassword"
            value={Data.confirmpassword}

            />
            <span onClick={()=> setShowPassword((prev)=>!prev)}>
         {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
    </span>
        </label>


        <button>
            Create Account
        </button>
        </form>
        </div>
  )
}

export default SignupForm