import React from 'react'

const Navbar = () => {
  return (
    <div>
 
       <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
       </nav>
     
    </div>
  )
}

export default Navbar;