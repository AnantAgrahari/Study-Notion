import React from 'react'
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly '>
 
       <nav>
        <ul className='flex gap-3'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
               <Link to ="/about">About</Link> 
            </li>
            <li>
               <Link to="/contact">Contact</Link> 
            </li>
        </ul>
       </nav>
        
        <div>
           
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                     </button>
                </Link>
            }
            { !isLoggedIn &&            //further part of code will run only if this condition becomes true// 
                <Link to="/signup">
                    <button>
                
                
                        Sign Up
                     </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                     <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                     }}>
                        Log Out
                     </button>
                </Link> 
            } 
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                     </button>
                </Link>
            }

        </div>
    </div> 
  )
}

export default Navbar; 