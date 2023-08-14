import React from 'react'

const SignupForm = () => {
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
            <p>First Name</p>
            <input
            required
            type="text"
            placeholder='Enter First Name'


            />
        </label>
        </form>
        </div>
  )
}

export default SignupForm